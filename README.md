# Mental performance app — concept prototype

A clickable 3-screen prototype (onboarding → daily check-in → post-session
summary) with an EN / 한국어 language toggle, built to discuss the concept
with Dr. Kim and 소희 before any real development starts.

No backend, no build step — just three static files.

## Files

- `index.html` — structure of the three screens
- `style.css` — visual styling (supports light/dark mode automatically)
- `script.js` — language switching and screen navigation logic

## How to put this on GitHub Pages (free, ~3 minutes)

### 1. Create a repository

1. Go to https://github.com/new
2. Name it anything, e.g. `mental-app-concept`
3. Keep it **Public** (required for free GitHub Pages)
4. Don't initialize with a README — you'll add these files directly

### 2. Add these three files

Easiest way, no terminal needed:
1. On your new repo's page, click **"uploading an existing file"**
2. Drag in `index.html`, `style.css`, and `script.js`
3. Click **Commit changes**

(If you prefer the terminal: `git init`, `git add .`, `git commit -m "concept prototype"`, then follow GitHub's push instructions shown on the empty repo page.)

### 3. Turn on GitHub Pages

1. In your repo, go to **Settings → Pages** (left sidebar)
2. Under "Build and deployment" → **Source**, select **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Wait ~1 minute, then refresh — GitHub shows your live URL at the top of
   that page, looking like:
   `https://yourusername.github.io/mental-app-concept/`

That link works for anyone, including Dr. Kim and 소희 — no login needed,
no app to install, just a link to click.

## Editing the content later

All the text lives in one place: the `translations` object at the top of
`script.js`. Each screen's strings are grouped under `onboarding`, `home`,
and `summary`, each with an `en` and `ko` version. Change the text there,
commit, and GitHub Pages updates automatically within a minute.

## What this is (and isn't)

This is a **discussion prop**, not a functional app — buttons navigate
between screens and toggle visual selection state, but nothing is saved,
there's no AI, no real self-talk personalization, no account system.
It exists to make the conversation with Dr. Kim and 소희 concrete before
any real content or engineering work starts.
