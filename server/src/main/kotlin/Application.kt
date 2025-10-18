package ru.sitranto

import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.*
import io.ktor.server.plugins.calllogging.CallLogging
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.plugins.di.*
import io.ktor.server.plugins.di.dependencies
import io.ktor.server.plugins.statuspages.StatusPages
import io.ktor.server.response.respondText
import kotlinx.serialization.json.Json
import ru.sitranto.repo.ProjectRepo
import ru.sitranto.repo.impl.InMemoryProjectRepo
import ru.sitranto.service.PicServiceImpl
import ru.sitranto.service.ProjectService
import ru.sitranto.storage.FileStorage
import java.io.File

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
            ignoreUnknownKeys = true
        })
    }

    install(CallLogging)
    install(StatusPages) {
        exception<Throwable> { call, cause ->
            call.application.environment.log.error("Unhandled", cause)
            call.respondText("Internal server error", status = io.ktor.http.HttpStatusCode.InternalServerError)
        }
    }
    install(DI)

    dependencies {
        provide<ProjectRepo> { InMemoryProjectRepo() }
        provide { FileStorage(File("data/pics")) }
        provide { ProjectService(resolve<ProjectRepo>()) }
        provide { PicServiceImpl(resolve<FileStorage>()) }
    }

    configureRouting()
}