# AGENTS.md

## Cursor Cloud specific instructions

**Product:** Kawhe — a Next.js 16 landing page and blog for a digital wallet loyalty system (cafés). Single app, not a monorepo.

**Tech stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, Framer Motion, TypeScript, npm.

### Running the application

- `npm run dev` — starts dev server on `http://localhost:3000`
- `npm run build` — production build
- `npm run lint` — ESLint (has pre-existing warnings/errors in the codebase)

### Key notes

- **No test framework:** There are no automated tests or test dependencies in this project. Skip test-related steps.
- **No Docker/database:** The app has no local database. All dynamic content comes from an external WordPress GraphQL API at `https://cms.kawhe.shop/graphql`.
- **WordPress CMS is optional:** The landing page works fully without the CMS. Blog posts and some FAQ content come from WordPress via WPGraphQL; the app gracefully degrades with try/catch fallbacks when the CMS is unreachable.
- **Environment variables** (optional, have sensible defaults):
  - `NEXT_PUBLIC_WORDPRESS_API_URL` — defaults to `https://cms.kawhe.shop/graphql`
  - `NEXT_PUBLIC_WORDPRESS_MENU_LOCATION` — defaults to `MENU_1`

### Deployment

- **Vercel:** The site is deployed to Vercel. To redeploy, run `vercel --token "$VERCEL_TOKEN" --yes --prod --scope upekshamendiz-gmailcoms-projects` from the workspace root. Requires `VERCEL_TOKEN` secret.
- **Live URL:** `https://workspace-nine-nu-10.vercel.app`
