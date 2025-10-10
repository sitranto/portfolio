package ru.sitranto.service

import ru.sitranto.models.Project
import ru.sitranto.repo.ProjectRepo
import java.util.UUID

class ProjectService(private val repo: ProjectRepo) : ProjectRepo by repo {
    suspend fun list(): List<Project> = repo.all()

    suspend fun get(id: UUID): Project? = repo.find(id)

    suspend fun create(
        title: String,
        descriptions: String,
        technologies: List<String>,
        github: String,
        isLive: Boolean?,
        live: String?,
        featured: Boolean,
        imageId: UUID
    ): Project {
        val p = Project(
            id = UUID.randomUUID(),
            title = title,
            descriptions = descriptions,
            technologies = technologies,
            github = github,
            isLive = isLive,
            live = live,
            featured = featured,
            imageId = imageId
        )
        return repo.create(p)
    }

    suspend fun update(
        id: UUID,
        title: String?,
        descriptions: String?,
        technologies: List<String>?,
        github: String?,
        isLive: Boolean?,
        live: String?,
        featured: Boolean?,
        imageId: UUID?
    ): Project? {
        val existing = repo.find(id) ?: return null
        val updated = existing.copy(
            title = title ?: existing.title,
            descriptions = descriptions ?: existing.descriptions,
            technologies = technologies ?: existing.technologies,
            github = github ?: existing.github,
            isLive = isLive ?: existing.isLive,
            live = live ?: existing.live,
            featured = featured ?: existing.featured,
            imageId = imageId ?: existing.imageId
        )
        return repo.update(updated)
    }
}