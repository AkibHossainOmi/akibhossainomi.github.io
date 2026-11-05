# akibhossainomi.github.io

Personal site of **Md. Akib Hossain Omi**: software engineer at Telcobright and co-founder of [Intech Solution](https://intechsolution.bd).

Live at **https://akibhossainomi.github.io**

Built with [Astro](https://astro.build), Tailwind CSS and a little React. Every page is pre-rendered to static HTML, so search engines and AI crawlers read the full content without running JavaScript.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
```

## Edit content

| What | Where |
| --- | --- |
| Name, links, email, nav | `src/data/site.ts` |
| Projects (featured / earlier) | `src/data/projects.ts` |
| Experience, skills, awards | `src/data/profile.ts` |
| Résumé PDF | `public/AkibHossainOmi.pdf` |
| AI-readable summary | `public/llms.txt` |

`npm run screenshots` refreshes the live-site previews of featured projects (needs a local Chrome or Edge).

## Deploy

```sh
npm run deploy     # builds and pushes dist/ to the gh-pages branch
```
