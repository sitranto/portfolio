package ru.sitranto.repo

import ru.sitranto.models.Project
import java.util.UUID

interface ProjectRepo {
    suspend fun all(): List<Project>
    suspend fun find(id: UUID): Project?
    suspend fun create(project: Project): Project
    suspend fun update(project: Project): Project?
    suspend fun delete(id: UUID): Boolean
}