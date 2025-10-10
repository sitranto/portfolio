package ru.sitranto

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import ru.sitranto.repo.impl.InMemoryProjectRepo
import ru.sitranto.routes.projectRoutes
import ru.sitranto.service.ProjectService

fun Application.configureRouting() {
    routing {
        projectRoutes(service = ProjectService(repo = InMemoryProjectRepo()))
    }
}
