# Deploying the Diwan Homes Website — 60 seconds via Netlify Drop

You don't need a Netlify account, a CLI, or Git. Just a browser.

## Steps

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in Chrome, Edge, or Safari.
2. In your file explorer, open **`SUBMISSION/03_Website/`**.
3. **Select every file and folder inside `03_Website/`** (Ctrl+A on Windows / Cmd+A on Mac). You want to drop the *contents*, not the parent folder itself. That means:
   - `index.html`, `listings.html`, `team.html`, `contact.html`, `DEPLOY_TO_NETLIFY.md`
   - the `css/`, `js/`, and `assets/` folders
4. **Drag the selection onto the dashed drop-zone** on the Netlify Drop page.
5. Wait ~15–30 seconds. Netlify will assign a random public URL like `https://something-something-abc123.netlify.app`.
6. **Copy that URL** — that's the "Website Link" you submit for Homework 1 (Section V, item 3 in the assignment PDF).

## Optional: pick a custom subdomain

Once the site is up, click **Site settings → Change site name** and enter something like `diwan-homes-dubai`. You'll get `https://diwan-homes-dubai.netlify.app` instead of the random one. This requires creating a free Netlify account (email + password only), but is highly recommended for the submission.

## Optional: replace or update the site later

Just drag the folder onto the same site again — Netlify will overwrite it in place.

## Troubleshooting

- **Fonts look wrong**: the site uses Google Fonts (Cormorant Garamond + Inter) — make sure the browser you use to view the deployed site has internet access.
- **Maps iframe blank**: some corporate networks block `google.com/maps/embed`. On personal Wi-Fi it should load fine.
- **Images missing**: verify the `assets/` folder made it into the upload — that's where all property photos and the logo live.

## What the submission expects (per the PDF, Section V)

> **3. Website Link:** Submit the published public URL (free subdomains are acceptable)

The `*.netlify.app` URL you get from Netlify Drop satisfies this exactly.
