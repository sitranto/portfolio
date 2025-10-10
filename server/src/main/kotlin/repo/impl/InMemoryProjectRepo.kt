package ru.sitranto.repo.impl

import ru.sitranto.models.Project
import ru.sitranto.repo.ProjectRepo
import java.util.UUID

class InMemoryProjectRepo : ProjectRepo {
    override suspend fun all(): List<Project> {
        TODO("Not yet implemented")
    }

    override suspend fun find(id: UUID): Project? {
        TODO("Not yet implemented")
    }

    override suspend fun create(project: Project): Project {
        TODO("Not yet implemented")
    }

    override suspend fun update(project: Project): Project? {
        TODO("Not yet implemented")
    }

    override suspend fun delete(id: UUID): Boolean {
        TODO("Not yet implemented")
    }
}