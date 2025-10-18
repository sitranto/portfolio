package ru.sitranto

import io.ktor.server.application.*
import io.ktor.server.plugins.di.dependencies
import io.ktor.server.routing.*
import ru.sitranto.routes.picRoutes
import ru.sitranto.routes.projectRoutes
import ru.sitranto.service.PicService
import ru.sitranto.service.ProjectService

fun Application.configureRouting() {
    val projectService: ProjectService by dependencies
    val picService: PicService by dependencies

    routing {
        projectRoutes(projectService)
        picRoutes(picService)
    }
}
