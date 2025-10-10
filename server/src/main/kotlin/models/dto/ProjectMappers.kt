package ru.sitranto.models.dto

import ru.sitranto.models.Project
import java.util.UUID

fun Project.toDto(): ProjectDto = ProjectDto(
    id = id.toString(),
    title = title,
    descriptions = descriptions,
    technologies = technologies,
    github = github,
    isLive = isLive,
    live = live,
    featured = featured,
    imageId = imageId.toString()
)

fun CreateProjectRequest.toModel(): Project = Project(
    id = UUID.randomUUID(),
    title = title,
    descriptions = descriptions,
    technologies = technologies,
    github = github,
    isLive = isLive,
    live = live,
    featured = featured,
    imageId = UUID.fromString(imageId)
)