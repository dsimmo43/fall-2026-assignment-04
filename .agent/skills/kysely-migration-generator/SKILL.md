---
name: kysely-migration-generator
description: Translates Mermaid Entity-Relationship Diagrams into type-safe Kysely database migrations. Use when the user requests a Kysely migration from an ERD, Mermaid schema, or database architecture diagram.
---

# Kysely Migration Generator Skill

## Execution Workflow

* **Entities $\rightarrow$ Tables:** Map Mermaid entities to snake_case table names (e.g., `USERS` $\rightarrow$ `users`).
* **Keys & Columns:** Convert `PK` attributes to auto-generating IDs/UUIDs and `FK` attributes to `.references().onDelete('cascade')`.
* **Cardinalities:** Correctly map `||--o{` (one-to-many) and `||--o|` (one-to-one with unique constraints).
* **File Output:** Write the generated TypeScript migration to `src/db/migrations/<timestamp>_<migration_name>.ts`.
* **Structure:** Enforce exports for both `up(db: Kysely<any>)` and `down(db: Kysely<any>)` functions. The `down` function must drop tables in reverse dependency order.