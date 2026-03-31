# About Me

Personal portfolio website built with React and Vite.

Live site:
`https://manireddy69-vscode.github.io/about-me/`

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

The app is organized so each kind of change has one obvious place:

```text
src/
  components/     shared UI pieces like Navbar, Footer, Cursor, ThemeToggle
  data/           text, links, project details, and section content
  hooks/          small reusable behavior like scroll reveal and typing effect
  sections/       page sections such as Hero, About, Skills, Projects, Contact
  styles/         main site stylesheet
  App.jsx         page assembly only
  main.jsx        React entry file
```

## Where to edit things

### 1. Update text, links, skills, and projects

Edit:
`src/data/siteContent.js`

This is the main content file. Most normal updates should happen here.

Examples:
- change your intro text
- update contact links
- add a new project
- edit skills
- change section wording

### 2. Change layout or section structure

Edit files inside:
`src/sections/`

Each section has its own file, so you do not need to search through one giant component anymore.

Examples:
- change the order of blocks in the hero section
- add a new section
- remove a card from the about section

### 3. Change shared UI behavior

Edit files inside:
`src/components/`
and
`src/hooks/`

Examples:
- navigation behavior
- theme toggle
- cursor effect
- typing animation
- scroll reveal animation

### 4. Change colors, spacing, fonts, and styling

Edit:
`src/styles/site.css`

This file controls the visual design.

Good things to search for:
- `:root` for theme colors
- `.hero` for landing section layout
- `.skills-grid` for skills cards
- `.project-card` for projects layout
- `.contact-form` for the form area

## Editing tips

- If you only want to change words, start with `src/data/siteContent.js`.
- If you only want to change the look, start with `src/styles/site.css`.
- If you want to change structure, open the matching file in `src/sections/`.
- `src/App.jsx` should stay small. It only wires the page together.

## Deployment

This project is set up for GitHub Pages through:
`.github/workflows/deploy-pages.yml`

Vite uses this base path:
`/about-me/`

If you ever rename the GitHub repo, also update:
`vite.config.js`
