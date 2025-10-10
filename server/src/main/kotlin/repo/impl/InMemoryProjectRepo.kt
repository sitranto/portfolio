package ru.sitranto.repo.impl

import ru.sitranto.models.Project
import ru.sitranto.repo.ProjectRepo
import java.util.UUID

class InMemoryProjectRepo : ProjectRepo {
    private val projects = mutableMapOf<UUID, Project>()

    override suspend fun all(): List<Project> = projects.values.toList()

    override suspend fun find(id: UUID): Project? = projects[id]

    override suspend fun create(project: Project): Project {
        projects[project.id] = project
        return project
    }

    override suspend fun update(project: Project): Project? {
        if (!projects.containsKey(project.id)) return null
        projects[project.id] = project
        return project
    }

    override suspend fun delete(id: UUID): Boolean = projects.remove(id) != null
}