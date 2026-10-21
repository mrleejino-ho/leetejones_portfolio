# Lee Tejones · Personal Portfolio

A responsive charcoal-and-silver editorial portfolio built with React 19, React Router, Tailwind CSS 4, Vite, and Lucide icons.

The persistent top navigation opens separate Home (`/`), About (`/about`), Projects (`/projects`), Skills (`/skills`), and Contact (`/contact`) pages. Each page highlights its navigation item and supports direct links, refreshes, and browser Back/Forward. Unknown routes show a recovery page.

## 1. Run locally

Use Node.js 22.12+ or Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the address printed by Vite in your local terminal. In this cloud workspace, if npm cannot write its default cache, use `npm ci --cache /workspace/.npm-cache`.

## 2. Add your information

Edit `src/main.jsx`:

- `profile`: name, title, email, GitHub, LinkedIn, and optional résumé URL. Empty contact fields stay hidden. GitHub currently points to the repository owner's account; confirm it is your preferred public profile.
- `projects`: contains your four supplied live applications and approved academic thesis. Add verified descriptions, technology stacks, and optional source repository URLs. Screenshot previews are stored in `public/projects/` and mapped by each project’s `screenshot` field. Empty stacks and repository links are hidden.
- `skills`: replace suggested skill areas with technologies you actually use.
- About and hero copy: personalize your interests and background.
- `profile.portrait`: uses `/portrait.png`, extracted from your supplied PDF at 1086 × 1448 pixels (3:4). Replace `public/portrait.png` to update your portrait. The homepage keeps the same ratio on desktop and mobile.

A résumé can be placed at `public/resume.pdf` and linked with `resume: '/resume.pdf'`. Do not publish private information in a résumé without checking it first.

The About page contains Lee’s approved CV summary, university education and Cum Laude distinction, RabScor internship, leadership roles, relevant coursework, and certificates/training. Elementary and high school details are omitted. The thesis is included as an academic project without a fabricated live URL. The CV PDF is not published; résumé download remains disabled. Proposed skill refinements still need Lee’s approval.

## 3. Understand the source

- `src/main.jsx`: editable profile and project data, page routes, shared navigation, and email-copy interaction.
- `src/styles.css`: responsive design and Tailwind import. Tailwind utility classes are also available in JSX.
- `public/favicon.svg`: LT favicon.
- `index.html`: page title and search description.
- `vite.config.js`: React and Tailwind build plugins.
- `vercel.json`: SPA route fallback for direct page URLs on Vercel.
- `public/_redirects`: equivalent route fallback for Netlify.

There is no backend, database, or API key requirement. The optional email button opens the visitor's mail application; it does not submit a form.

## 4. Validate your changes

```sh
npm run build
npm run preview
```

Review desktop and mobile layouts, keyboard navigation, all outgoing links, contact details, and résumé contents. The production output is `dist/`.

## 5. Push the source to GitHub

From this repository, after reviewing your changes:

```sh
git add .
git commit -m "Build Lee Tejones portfolio"
git push origin HEAD:main
```

If Git reports missing author identity, set your own name and email with `git config user.name` and `git config user.email`. Do not copy someone else's identity. The source has not been pushed or deployed automatically.

## 6. Deploy with Vercel (recommended)

1. Sign in at https://vercel.com and choose **Add New → Project**.
2. Import `mrleejino-ho/leetejones_portfolio` from GitHub and select `main` as the production branch.
3. Select **Vite** as the framework. Use `npm run build` as the build command and `dist` as the output directory. Keep the repository root as the root directory.
4. Click **Deploy**. No environment variables are required.
5. Open the HTTPS URL Vercel assigns and check the navigation and links on a phone and desktop. Open and refresh `/projects` and `/contact` directly to confirm the deployed routing fallback works.
6. Future pushes to `main` trigger production updates. Add a custom domain under the project's domain settings if desired.

Deployment requires your hosting account and GitHub authorization. No live deployment has been created by this code setup.

### Alternative: Netlify

Import the same GitHub repository into Netlify. Use `npm run build`, publish directory `dist`, and branch `main`. Deploy using the provider's UI. You can also upload the built `dist` directory through Netlify's manual deployment flow.

## Featured projects

- [BuzzTap Business](https://buzztap-business.vercel.app/)
- [BuzzTap Admin](https://buzztap-admin.vercel.app/)
- [PEIS-AI — Photovoltaic Monitoring and Analysis System](https://pvmonitoringsystem.vercel.app/)
- [ARMS — Application Real-Time Monitoring System](https://ar-ms-nu.vercel.app/)

These URLs were provided by Lee. Outbound requests to these hosts were blocked by the cloud network policy, so external availability has not been independently verified. Project descriptions and technology stacks were supplied by Lee. Project previews use Lee’s supplied application screenshots. Each image links to the matching live application and preserves the full screenshot without cropping. If an image fails to load, the decorative branding remains available as a fallback. Add your role, technologies, and outcomes to turn these into detailed case studies.
