# Penguin Gift 🐧🎁

A cute, scrapbook-style birthday gift as a single-page React app (Vite + Tailwind CSS).

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # static site in dist/ — upload anywhere, works from any sub-path
```

## Make it yours

Edit **`src/data.js`** — every piece of text, the poem, the date, and all photo URLs live there.
To use your own photos, drop them in a `public/` folder (e.g. `public/us1.jpg`) and reference
them as `'./us1.jpg'`. Any character (penguins, bears) can be replaced by setting its entry in
`CHARACTERS` to an image or GIF URL; leave it `null` to keep the built-in cartoon.

## Flow

| View | Screen | Goes to |
|---|---|---|
| 1 | PLS ACCEPT THE GIFT | YES → 3, NO → 2 |
| 2 | WHY DID YOU CLICK NO! | TRY AGAIN → 1 |
| 3 | Choose a penguin | penguin 1 → 4, 2 → 6, 3 → 8 |
| 4 | HAPPY BIRTHDAY + cake penguin | → 5 |
| 5 | Polaroid + poem | → 3 |
| 6 | Heart photo collage | → 7 |
| 7 | Will you be mine? | → 3 |
| 8 | Virtual hug | → 9 |
| 9 | I LOVE YOU | (start over) |

Routing is a single `currentPage` state in `src/App.jsx`; page names are in `src/pages.js`, and
each screen is a component in `src/views/`.
