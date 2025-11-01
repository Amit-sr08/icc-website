## Copilot / AI assistant quick guide for this repo

This repository is a small React + Vite static website for "Icchapurti Coaching Classes". Keep guidance concise and actionable with pointers to exact files and commands.

- Project type: React (functional components) built with Vite. Entry: `src/main.jsx`, router + pages in `src/App.jsx`.
- Styling: Tailwind (see `tailwind.config.js`) and `src/index.css` for global styles.
- Animations: AOS is initialized in `src/App.jsx` (useEffect) — avoid removing or duplicating initialization.
- Pages: `src/pages/*` contains routeable pages (Home, About, Courses, Results, Contact). Components live in `src/components/` (e.g. `Navbar.jsx`, `Footer.jsx`).

- Email integration: EmailJS config is in `src/config/emailjs.js`. It prefers Vite env vars:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  If you change credentials, update `.env` at project root or edit `src/config/emailjs.js` directly (file currently contains default values).

- Build & dev commands (from `package.json`):
  - Dev: `npm run dev` (Vite — default host/port 5173)
  - Build: `npm run build` (output: `dist/`)
  - Preview: `npm run preview`
  - Lint: `npm run lint` (runs eslint over the repo)

- Routing conventions: Routes are declared in `src/App.jsx` with these paths: `/`, `/about`, `/courses`, `/results`, `/contact`. Add new pages under `src/pages` and register routes here.

- Assets: static images live in `src/assets/pics/` and are referenced from pages/components.

- Forms & templates: See `EMAIL_TEMPLATES.md` and `EMAILJS_SETUP.md` for template variable names. `src/config/emailjs.js` lists the expected template variables (e.g. `fullName`, `studentPhone`, `parentPhone`, `course`, `comment`).

- Conventions and patterns discovered (do not invent new patterns without discussing):
  - Prefer simple functional components (no class components).
  - Global app-level effects (AOS) are initialized once in `App.jsx`.
  - Keep presentational logic inside `pages/` and UI primitives in `components/`.

- Integration notes for PRs & edits:
  - When changing layout or routes, update `src/App.jsx` and ensure `Navbar.jsx` links match routes.
  - If adjusting styles, update Tailwind config or `src/index.css` rather than inline styles across many files.
  - For any change touching EmailJS credentials, prefer `.env` with VITE_ prefixes so credentials are not hard-coded.

- Helpful examples to reference in edits:
  - App entry & routing: `src/App.jsx`, `src/main.jsx`
  - EmailJS config: `src/config/emailjs.js`
  - Contact form: `src/pages/Contact.jsx` (form handling + map embed)

If any section here is unclear or you'd like the format adjusted (more examples, safe-edit checklist, or test commands), tell me what to add and I will update the instruction file.
