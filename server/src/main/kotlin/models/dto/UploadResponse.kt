package ru.sitranto.models.dto

import kotlinx.serialization.Serializable

@Serializable
data class UploadResponse(val id: String, val url: String)
