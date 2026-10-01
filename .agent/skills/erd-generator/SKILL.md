---
name: erd-generator
description: Generates and validates Mermaid Entity-Relationship Diagrams from unstructured domain requirements. Use when the user requests an ERD, data model, database architecture diagram, or similar entity-relationship design.
---

# ERD Generator Skill

## Execution Workflow

Follow these steps sequentially. Do not skip any step.

1. Parse domain requirements into entities, primary keys (`PK`), foreign keys (`FK`), and cardinalities.
2. Write the drafted Mermaid syntax directly to `docs/architecture/schema.mmd`.
3. Execute `node scripts/render_erd.js docs/architecture/schema.mmd`.
4. **Self-Correction Loop:** If execution fails with `SYNTAX_ERROR`, parse the error trace, adjust the Mermaid syntax in `docs/architecture/schema.mmd`, and re-run (up to 3 retries).
5. **Final Output:** Present the raw Mermaid block to the user and reference the generated image asset path (`docs/architecture/erd.svg`).