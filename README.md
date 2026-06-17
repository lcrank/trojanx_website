# 🐉 Trojan X Solutions

> React + Vite frontend · Node.js/Express backend · Deploy on Railway

---

## Project Structure

```
trojanx/
├── client/                  # React frontend (Vite)
│   ├── public/favicon.png
│   ├── src/
│   │   ├── assets/          # Logo & image assets
│   │   └── components/      # All page sections
│   ├── package.json
│   └── vite.config.js
├── server/
│   └── src/index.js         # Express API + serves React build
├── railway.json             # Railway deployment config
├── nixpacks.toml            # Railway build phases
└── package.json             # Root — install + build + start scripts
```

---

## Local Development

```bash
# Install all dependencies
npm install
cd client && npm install && cd ..

# Build the React frontend once
npm run build

# Start the server (serves both API + frontend)
npm start
# → http://localhost:5000
```

Or for hot-reload frontend dev:
```bash
# Terminal 1 — backend
npm start

# Terminal 2 — Vite dev server (hot reload)
cd client && npm run dev
# → http://localhost:5173  (proxies /api to :5000)
```

---

## Deploy to Railway

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Trojan X Solutions"
git remote add origin https://github.com/YOUR_USERNAME/trojanx-website.git
git push -u origin main
```

### Step 2 — Create Railway Project

1. Go to **https://railway.app** → New Project
2. Click **"Deploy from GitHub repo"**
3. Select your `trojanx-website` repo
4. Railway auto-detects `railway.json` and `nixpacks.toml` ✅
5. Click **Deploy**

### Step 3 — Add Environment Variables

In Railway Dashboard → Your Service → **Variables**, add:

| Variable | Value |
|---|---|
| `NODE_ENV` | `production` |
| `MAIL_USER` | your Gmail e.g. `you@gmail.com` |
| `MAIL_PASS` | Gmail App Password (16 chars, no spaces) |
| `MAIL_TO` | `hello@trojanx.in` |
| `PORT` | `5000` (Railway sets this automatically too) |

After adding → Railway redeploys automatically ✅

### Step 4 — Add Custom Domain (trojanx.in)

1. Railway Dashboard → Your Service → **Settings → Networking**
2. Click **"Add Custom Domain"** → enter `trojanx.in`
3. Railway gives you a CNAME record
4. Add it to your domain registrar's DNS settings
5. SSL auto-provisioned ✅

---

## Gmail App Password

1. **myaccount.google.com → Security**
2. Enable **2-Step Verification**
3. Search **"App Passwords"** → Create for "Mail"
4. Copy the 16-character password → use as `MAIL_PASS`

---

## Image Assignment

| Asset | Section |
|---|---|
| `trojan_source.gif` | Hero — animated dragon visual |
| `logo_nobg.png` | Loader screen |
| `logo_nav.png` | Navbar logo |
| `logo_org.png` | About section (framed box) |
| `logo_black.png` | Footer logo |
| `favicon.png` | Browser tab |

---

## Brand

- **Red:** `#C8102E` · **BG:** `#0A0A0A` · **Surface:** `#111`
- **Fonts:** Bebas Neue · Rajdhani · Inter
