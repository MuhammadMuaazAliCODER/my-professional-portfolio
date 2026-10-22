# Muhammad Muaaz Ali — Portfolio

A responsive, editorial full-stack developer portfolio built with React, TypeScript, and Vite. Project compositions are original conceptual diagrams, not screenshots of the linked applications.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; use `npm run preview` to inspect that build locally. `npm run lint` runs Oxlint.

This workspace is on a mounted filesystem that does not allow npm to create executable symlinks. Dependencies were installed with `npm install --bin-links=false`. In that environment, run the installed tools directly:

```sh
node node_modules/typescript/bin/tsc -b
node node_modules/vite/bin/vite.js build
```

The development server can similarly be started with `node node_modules/vite/bin/vite.js --host 0.0.0.0`.

## Deploy

Import this repository into Vercel and use the Vite defaults: build command `npm run build`, output directory `dist`. No server-side environment variables or API credentials are required. The static `404.html` is copied into `dist` for static hosts that honor that convention.

## Content

Project descriptions and technology lists are based on the supplied project details. Sokvia is identified as collaborative university work; no sole authorship is claimed. ChatByMuaaz feature operation is not guaranteed by this portfolio copy. Contact actions open an email draft rather than simulating message delivery. Update the content in `src/App.tsx` when verified details change.# my-professional-portfolio
