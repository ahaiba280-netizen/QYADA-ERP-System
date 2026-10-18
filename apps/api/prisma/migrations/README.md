# Prisma migrations - how to apply (feature/erd-migrations)

This folder contains guidance and placeholders for applying Prisma schema changes for the ERD / initial migration.

Steps to apply the Prisma schema locally (recommended):

1. Ensure Postgres is running: `docker compose up -d`
2. cd apps/api
3. Install dependencies: `npm install`
4. Generate Prisma client:
   - `npx prisma generate`
5. Apply schema to the database using one of the options:
   - Development (recommended): `npx prisma migrate dev --name init` (creates a migration folder and applies)
   - Quick push (no migration history): `npx prisma db push`

6. Seed demo data: `npm run db:seed`

Notes:
- If you use `migrate dev`, review the generated SQL under `prisma/migrations/` before applying to production.
- For production, use `prisma migrate deploy` to run already-created migrations.

