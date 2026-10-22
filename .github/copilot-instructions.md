# Portfolio Project Notes

- This is a Vite + React 19 + TypeScript single-page portfolio; keep dependencies lean.
- Keep the visual system editorial and monochrome. Respect existing responsive breakpoints and reduced-motion support.
- Use only supplied, verified project details. Concept visuals must remain clearly labeled as conceptual, not product screenshots.
- Do not add invented metrics, employers, testimonials, awards, availability claims, or personal data.
- Contact uses a mailto fallback; do not present a form as sent unless a real delivery service exists.
- Validate source changes with `node node_modules/typescript/bin/tsc -b` and `node node_modules/vite/bin/vite.js build` when npm `.bin` symlinks are unavailable on the mounted filesystem.
