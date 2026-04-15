# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Tech Cyber Hub (`artifacts/tech-cyber-hub`)
- **Type**: React + Vite web app
- **Route**: `/` (root)
- **Description**: Full production-ready website for a USA-based tech support company
- **Pages**: Home, Services, ServiceDetail (dynamic), About, Contact
- **Features**:
  - Premium dark navy + electric blue glassmorphism design
  - Framer Motion animations (scroll reveal, floating elements, counter animations)
  - Mobile-first responsive layout
  - Sticky bottom "Call Now" bar on mobile
  - Floating phone button on desktop
  - Dynamic service pages from `src/data/services.ts` (8 services)
  - Multi-step animated lead generation form (4 steps)
  - FAQ sections with JSON-LD schema markup
  - Intersection Observer-based counter animations
  - Sticky navigation that becomes glass on scroll
  - Google Fonts (Outfit, Space Mono)
