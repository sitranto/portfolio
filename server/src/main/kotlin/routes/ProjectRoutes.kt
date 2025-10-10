package ru.sitranto.routes

import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import ru.sitranto.models.dto.CreateProjectRequest
import ru.sitranto.models.dto.UpdateProjectRequest
import ru.sitranto.models.dto.toDto
import ru.sitranto.service.ProjectService
import java.util.UUID

fun Route.projectRoutes(service: ProjectService) {
    route("/api/projects") {
        get {
            val list = service.list().map { it.toDto() }
            call.respond(list)
        }

        post {
            val req = call.receive<CreateProjectRequest>()
            val imageId = try {
                UUID.fromString(req.imageId)
            } catch (_: Exception) {
                return@post call.respond(HttpStatusCode.BadRequest, mapOf("error" to "imageId is not a valid UUID"))
            }

            val created = service.create(
                title = req.title,
                descriptions = req.descriptions,
                technologies = req.technologies,
                github = req.github,
                isLive = req.isLive,
                live = req.live,
                featured = req.featured,
                imageId = imageId
            )
            call.respond(HttpStatusCode.Created, created.toDto())
        }

        get("{id}") {
            val idParam = call.parameters["id"] ?: return@get call.respond(HttpStatusCode.BadRequest)
            val id = try { UUID.fromString(idParam) } catch (_: Exception) {
                return@get call.respond(HttpStatusCode.BadRequest, mapOf("error" to "id is not a valid UUID"))
            }
            val p = service.get(id) ?: return@get call.respond(HttpStatusCode.NotFound)
            call.respond(p.toDto())
        }

        put("{id}") {
            val idParam = call.parameters["id"] ?: return@put call.respond(HttpStatusCode.BadRequest)
            val id = try { UUID.fromString(idParam) } catch (_: Exception) {
                return@put call.respond(HttpStatusCode.BadRequest, mapOf("error" to "id is not a valid UUID"))
            }

            val req = call.receive<UpdateProjectRequest>()
            val imageUuid = req.imageId?.let {
                try { UUID.fromString(it) } catch (_: Exception) { return@put call.respond(HttpStatusCode.BadRequest, mapOf("error" to "imageId is not a valid UUID")) }
            }

            val updated = service.update(
                id = id,
                title = req.title,
                descriptions = req.descriptions,
                technologies = req.technologies,
                github = req.github,
                isLive = req.isLive,
                live = req.live,
                featured = req.featured,
                imageId = imageUuid
            ) ?: return@put call.respond(HttpStatusCode.NotFound)

            call.respond(updated.toDto())
        }

        delete("{id}") {
            val idParam = call.parameters["id"] ?: return@delete call.respond(HttpStatusCode.BadRequest)
            val id = try { UUID.fromString(idParam) } catch (_: Exception) {
                return@delete call.respond(HttpStatusCode.BadRequest, mapOf("error" to "id is not a valid UUID"))
            }
            val deleted = service.delete(id)
            if (deleted) call.respond(HttpStatusCode.NoContent) else call.respond(HttpStatusCode.NotFound)
        }
    }
}