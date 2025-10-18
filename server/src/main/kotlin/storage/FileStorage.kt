package ru.sitranto.storage

import java.io.File
import java.util.UUID

class FileStorage(private val root: File = File("data/pics")) {
    init { if (!root.exists()) root.mkdirs() }

    fun save(streamProvider: () -> java.io.InputStream, ext: String = "bin"): Pair<UUID, File> {
        val id = UUID.randomUUID()
        val file = File(root, "$id.$ext")
        streamProvider().use { input ->
            file.outputStream().buffered().use { out -> input.copyTo(out) }
        }
        return id to file
    }

    fun findFileById(id: String): File? {
        return root.listFiles { _, name -> name.startsWith("$id.") }?.firstOrNull()
    }

    fun delete(id: String) {
        val file = findFileById(id)
        file?.delete()
    }
}