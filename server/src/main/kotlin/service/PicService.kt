package ru.sitranto.service

import io.ktor.http.content.PartData
import io.ktor.http.content.streamProvider
import ru.sitranto.models.dto.UploadResponse
import ru.sitranto.storage.FileStorage
import java.io.File

interface PicService {
    suspend fun get(id: String): Result<File>
    suspend fun create(part: PartData.FileItem): Result<UploadResponse>
    suspend fun delete(id: String): Result<Unit>
}

class PicServiceImpl(private val fileStorage: FileStorage): PicService {
    companion object {
        private const val DEFAULT_BUFFER_SIZE = 8192
    }

    override suspend fun get(id: String): Result<File> = runCatching {
        fileStorage.findFileById(id) ?: throw NoSuchElementException("File with id $id not found")
    }

    override suspend fun create(part: PartData.FileItem): Result<UploadResponse> = runCatching {
        val maxFileSizeBytes = 5L * 1024 * 1024 // 5 MB
        val allowedContentTypes = setOf("image/png", "image/jpeg", "image/webp", "image/gif")

        val contentType = part.contentType?.toString() ?: ""
        if (contentType !in allowedContentTypes) {
            part.dispose()
            throw IllegalArgumentException("Unsupported content type: $contentType")
        }

        val original = part.originalFileName ?: ""
        val extFromName = original.substringAfterLast('.', "")
        val ext = when {
            extFromName.isNotBlank() -> extFromName
            contentType.contains("png", ignoreCase = true) -> "png"
            contentType.contains("jpeg", ignoreCase = true) || contentType.contains("jpg", ignoreCase = true) -> "jpg"
            contentType.contains("webp", ignoreCase = true) -> "webp"
            contentType.contains("gif", ignoreCase = true) -> "gif"
            else -> "bin"
        }

        val temp = kotlin.io.path.createTempFile(suffix = ".$ext").toFile()
        var total: Long = 0

        part.streamProvider().use { input ->
            temp.outputStream().buffered().use { out ->
                val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
                while (true) {
                    val r = input.read(buffer)
                    if (r <= 0) break
                    out.write(buffer, 0, r)
                    total += r
                    if (total > maxFileSizeBytes) {
                        out.flush()
                        temp.delete()
                        part.dispose()
                        throw IllegalArgumentException("File is too large. Max $maxFileSizeBytes bytes")
                    }
                }
            }
        }

        val (id, _) = fileStorage.save({ temp.inputStream() }, ext)
        temp.delete()
        part.dispose()

        val url = "/pic/$id"
        UploadResponse(id.toString(), url)
    }

    override suspend fun delete(id: String): Result<Unit> = runCatching {
        fileStorage.findFileById(id) ?: throw NoSuchElementException("No file with ID $id exists")
        fileStorage.delete(id)
    }
}