package ru.sitranto.routes

import io.ktor.http.HttpStatusCode
import io.ktor.http.content.forEachPart
import io.ktor.server.request.receiveMultipart
import io.ktor.server.response.respond
import io.ktor.server.response.respondFile
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import ru.sitranto.service.PicService

fun Route.picRoutes(picService: PicService) {
    route("/pic") {
        post {
            val multipart = call.receiveMultipart()
            var uploadResult: Result<*>? = null

            multipart.forEachPart { part ->
                when (part) {
                    is io.ktor.http.content.PartData.FileItem -> {
                        uploadResult = picService.create(part)
                        part.dispose()
                        return@forEachPart
                    }
                    else -> {
                        part.dispose()
                    }
                }
            }

            when {
                uploadResult == null -> {
                    call.respond(HttpStatusCode.BadRequest, mapOf("error" to "No file uploaded"))
                }
                uploadResult.isFailure -> {
                    val exception = uploadResult.exceptionOrNull()
                    val message = exception?.message ?: "Unknown error"
                    val status = when (exception) {
                        is IllegalArgumentException -> HttpStatusCode.BadRequest
                        is NoSuchElementException -> HttpStatusCode.NotFound
                        else -> HttpStatusCode.InternalServerError
                    }
                    call.respond(status, mapOf("error" to message))
                }
                else -> {
                    val response = uploadResult.getOrNull()!!
                    call.respond(HttpStatusCode.Created, response)
                }
            }
        }
        get("{id}") {
            val id = call.parameters["id"] ?: return@get call.respond(HttpStatusCode.BadRequest)
            val result = picService.get(id)

            when {
                result.isFailure -> {
                    val exception = result.exceptionOrNull()
                    val status = if (exception is NoSuchElementException) HttpStatusCode.NotFound else HttpStatusCode.InternalServerError
                    call.respond(status, mapOf("error" to (exception?.message ?: "File not found")))
                }
                else -> {
                    call.respondFile(result.getOrNull()!!)
                }
            }
        }
        delete ("{id}" ) {
            val id = call.parameters["id"] ?: return@delete call.respond(HttpStatusCode.BadRequest)
            val result = picService.delete(id)

            when {
                result.isFailure -> {
                    val exception = result.exceptionOrNull()
                    val status = if (exception is NoSuchElementException) HttpStatusCode.NotFound else HttpStatusCode.InternalServerError
                    call.respond(status, mapOf("error" to (exception?.message ?: "File not found")))
                }
                else -> {
                    call.respond(HttpStatusCode.NoContent)
                }
            }
        }
    }
}