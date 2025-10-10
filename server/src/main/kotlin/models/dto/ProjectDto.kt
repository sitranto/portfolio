package ru.sitranto.models.dto

import kotlinx.serialization.Serializable

@Serializable
data class ProjectDto(
    val id: String,
    val title: String,
    val descriptions: String,
    val technologies: List<String>,
    val github: String,
    val isLive: Boolean? = null,
    val live: String? = null,
    val featured: Boolean,
    val imageId: String
)

@Serializable
data class CreateProjectRequest(
    val title: String,
    val descriptions: String,
    val technologies: List<String> = emptyList(),
    val github: String = "",
    val isLive: Boolean? = null,
    val live: String? = null,
    val featured: Boolean = false,
    val imageId: String
)

@Serializable
data class UpdateProjectRequest(
    val title: String? = null,
    val descriptions: String? = null,
    val technologies: List<String>? = null,
    val github: String? = null,
    val isLive: Boolean? = null,
    val live: String? = null,
    val featured: Boolean? = null,
    val imageId: String? = null
)