# Greenserve

A Next.js foundation for coordinating sustainable services across business locations. The starter includes a responsive workspace dashboard, a PostgreSQL-backed service model, Prisma tooling, and a local PostgreSQL service.

## Stack

- Next.js App Router and React
- TypeScript and Tailwind CSS v4
- PostgreSQL and Prisma ORM v7
- Docker Compose for local PostgreSQL

## Get started

Requirements: Node.js 24 or newer and Docker Desktop.

```bash
npm install
cp .env.example .env
docker compose up -d
npm run db:migrate -- --name init
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). The health endpoint is available at `/api/health`.

## Database commands

```bash
npm run db:generate # regenerate the Prisma client
npm run db:migrate  # create and apply a development migration
npm run db:studio   # open Prisma Studio
```

The first migration is created locally from `prisma/schema.prisma`. Keep generated Prisma client files out of version control; `npm run build` generates them before compiling the app.

## Project map

```text
app/
  api/health/       health check route
  globals.css       design system and responsive styles
  layout.tsx        document shell and metadata
  page.tsx          Greenserve workspace overview
lib/
  prisma.ts         shared Prisma client
prisma/
  schema.prisma     organization, user, and service request models
```
