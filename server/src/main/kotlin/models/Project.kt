package ru.sitranto.models

import java.util.UUID

data class Project(
    val id: UUID,
    val title: String,
    val descriptions: String,
    val technologies: List<String>,
    val github: String,
    val isLive: Boolean?,
    val live: String?,
    val featured: Boolean,
    val imageId: UUID,
)
