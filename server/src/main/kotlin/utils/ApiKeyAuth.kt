package ru.sitranto.utils

import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.createApplicationPlugin
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.request.httpMethod
import io.ktor.server.request.path
import io.ktor.server.response.respond
import java.security.MessageDigest
import kotlin.text.Charsets.UTF_8

class ApiKeyAuthConfig {
    var headerName: String = "X-Api-Key"
    var expectedKey: String = applicationEnvironment().config.property("authorization.secret").getString()
    var excludedPaths: Set<String> = emptySet()
}

val ApiKeyAuth = createApplicationPlugin(
    name = "ApiKeyAuth",
    createConfiguration = ::ApiKeyAuthConfig
) {
    onCall { call ->
        val cfg = pluginConfig
        val method = call.request.httpMethod
        val path = call.request.path()

        if (method == HttpMethod.Get || path in cfg.excludedPaths) return@onCall

        val apiKey = call.request.headers[cfg.headerName]
        if (apiKey == null || !constantTimeEquals(apiKey, cfg.expectedKey)) {
            call.respond(HttpStatusCode.Unauthorized, "Invalid or missing API key")
            return@onCall
        }
    }
}

private fun constantTimeEquals(a: String, b: String): Boolean {
    val aBytes = a.toByteArray(UTF_8)
    val bBytes = b.toByteArray(UTF_8)
    return MessageDigest.isEqual(aBytes, bBytes)
}