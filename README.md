# Ryan McPhedrain — Portfolio

A static personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Lucide, and Motion. Project content lives in typed data at `src/data/projects.ts`; no database or API is required.

## Local development

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3100](http://localhost:3100). The development script uses port 3100 to avoid a local service already using port 3000.

## Build and static export

```bash
npm run typecheck
npm run build
```

The static site is written to `out/`. Deploy that directory to any static host. All project detail routes are generated at build time.

## Content and launch notes

- Edit `src/data/projects.ts` to update project copy, categories, technologies, and architecture lists.
- The About page intentionally uses placeholders for a portrait, CV, LinkedIn, and GitHub. The Contact page intentionally has no invented address or form destination.
- The Lab page labels every experiment as planned.
- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before deployment so Open Graph image URLs resolve to the production domain.
- Replace or supplement the generated SVG project visuals and Open Graph image as real assets become available.
