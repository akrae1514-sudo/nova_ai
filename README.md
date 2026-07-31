# Nova AI

Monorepo foundation for the Nova AI platform.

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript (strict)
- **Tailwind CSS v4** · shadcn/ui (radix-nova) · Motion
- **TanStack Query** · React Hook Form · Zod
- **Prisma** · PostgreSQL
- **Better Auth** (configured, not yet wired)
- **pnpm** workspace · ESLint · Prettier · Husky · lint-staged · Docker

## Structure

```
nova-ai/
├── docs/          # Project documentation (spec, architecture, roadmap, decisions)
├── apps/web/      # Next.js web application
│   ├── app/       # App Router (layout, pages, routes)
│   ├── components/ # Reusable UI (components/ui = shadcn)
│   ├── features/  # Feature-scoped modules
│   ├── hooks/     # Shared React hooks
│   ├── lib/       # Core libraries (prisma, auth, env, utils)
│   ├── providers/ # React providers (TanStack Query)
│   ├── services/  # Server-side services & API clients
│   ├── styles/    # Global styles (Tailwind v4)
│   ├── types/     # Shared TypeScript types
│   └── utils/     # Helper utilities
└── packages/      # Shared packages (future)
```

## Prerequisites

- Node.js 20+
- pnpm 10+
- Docker (optional, for the database)

## Getting Started

```bash
pnpm install

# Database (via Docker)
docker compose up -d db

# Environment
cp apps/web/.env.example apps/web/.env

# Prisma
pnpm db:generate

# Development
pnpm dev
```

Open http://localhost:3000.

## Full Stack (Docker)

```bash
docker compose up --build
```

## Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `pnpm dev`          | Start the web app (dev)        |
| `pnpm build`        | Production build               |
| `pnpm lint`         | ESLint                         |
| `pnpm typecheck`    | TypeScript (`tsc --noEmit`)    |
| `pnpm format`       | Prettier (write)               |
| `pnpm format:check` | Prettier (check)               |
| `pnpm db:generate`  | Generate Prisma Client         |
| `pnpm db:migrate`   | Create/apply Prisma migrations |
| `pnpm db:studio`    | Open Prisma Studio             |

## Environment Variables

See `apps/web/.env.example`. Validated at runtime via `lib/env.ts` (Zod).
