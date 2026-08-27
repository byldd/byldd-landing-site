# Byldd Landing Site

Next.js 16 (App Router, Turbopack) + Tailwind CSS v4 + shadcn/ui, with Payload CMS 3 on MongoDB.

## Stack

| Piece | Version | Notes |
| --- | --- | --- |
| Next.js | 16.3.3 | App Router, Turbopack, React 19.2 |
| Tailwind CSS | v4 | CSS-first config in `src/app/(frontend)/globals.css` |
| shadcn/ui | v4 CLI | `base-nova` preset — components built on **Base UI**, Lucide icons |
| Payload CMS | 3.88 | Lexical rich text, Sharp image resizing |
| Database | MongoDB | via `@payloadcms/db-mongodb` |

## Getting started

1. Copy the env template and fill it in (a local `.env` with a generated secret already exists):

   ```bash
   cp .env.example .env
   ```

   - `PAYLOAD_SECRET` — generate with `openssl rand -base64 32`
   - `DATABASE_URI` — e.g. `mongodb://127.0.0.1:27017/byldd-landing-site`

2. Make sure MongoDB is running (`brew services start mongodb-community`, or point `DATABASE_URI` at Atlas).

3. Install and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000/admin and create the first admin user.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Next dev server (frontend + Payload admin) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run generate:types` | Regenerate `src/payload-types.ts` from the Payload config |
| `npm run generate:importmap` | Regenerate the admin import map after adding custom components |

Re-run `generate:types` and `generate:importmap` whenever you change collections or add custom admin components.

## Layout

```
src/
  app/
    (frontend)/          # public site — layout, globals.css, pages
    (payload)/           # Payload admin UI + REST/GraphQL routes
      admin/[[...segments]]/
      api/[...slug]/
      api/graphql/
      api/graphql-playground/
  collections/           # Payload collections: Pages, Media, Users
  components/ui/         # shadcn/ui components
  lib/utils.ts           # cn() helper
  payload.config.ts      # Payload config (@payload-config)
  payload-types.ts       # generated — do not edit
```

## Routes

- `/` — frontend, reads from Payload via the local API
- `/admin` — Payload admin panel
- `/api/*` — Payload REST API
- `/api/graphql` and `/api/graphql-playground` — GraphQL

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Components resolve against the `base-nova` preset, so they use Base UI primitives. Note that Base UI uses a `render` prop rather than Radix's `asChild`:

```tsx
<Button render={<Link href="/admin" />}>Open admin panel</Button>
```

## Notes

- `package.json` sets `"type": "module"` — required for the Payload CLI to load `payload.config.ts`.
- Uploads are written to `public/media` and gitignored.
- `graphql` is pinned to v16 because Payload 3 does not yet support graphql v17.
- No email adapter is configured, so Payload logs emails (e.g. password resets) to the console.
