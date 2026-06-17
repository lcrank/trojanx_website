# 🐉 Trojan X Solutions

> Built with React + Vite (frontend) · Node.js Serverless (API) · Deployed on Vercel

---

## Project Structure

```
trojanx/
├── client/                  # React frontend (Vite)
│   ├── public/favicon.png
│   ├── src/
│   │   ├── assets/          # All logo/image assets
│   │   ├── components/      # All sections (Hero, Services, etc.)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── api/
│   └── contact.js           # Vercel serverless function (contact form email)
├── server/                  # Local dev server (optional)
│   └── src/index.js
├── vercel.json              # Vercel deployment config
└── README.md
```

---

## Local Development

```bash
# Install client dependencies
cd client && npm install

# Run frontend
npm run dev
# → http://localhost:5173
```

For the contact form locally, run the Express server separately:
```bash
cd server && npm install
cp .env.example .env   # fill in your Gmail credentials
npm run dev
# → http://localhost:5000
```

---

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Trojan X Solutions"
git remote add origin https://github.com/YOUR_USERNAME/trojanx-website.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your `trojanx-website` repo
4. **Leave all Build Settings blank** — `vercel.json` handles everything
5. Click **Deploy**

### Step 3 — Add Environment Variables

In Vercel Dashboard → Your Project → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `MAIL_USER` | your Gmail address e.g. `you@gmail.com` |
| `MAIL_PASS` | Gmail App Password (see below) |
| `MAIL_TO` | where to receive enquiries e.g. `hello@trojanx.in` |

> **Important:** After adding env vars, go to **Deployments → Redeploy** (select "Redeploy with existing build cache" → No).

### Step 4 — Connect Custom Domain (trojanx.in)

1. Vercel Dashboard → Your Project → **Settings → Domains**
2. Add `trojanx.in` and `www.trojanx.in`
3. Vercel gives you DNS records — add them to your domain registrar
4. SSL is automatic ✅

---

## Gmail App Password Setup

1. Go to **myaccount.google.com → Security**
2. Enable **2-Step Verification** (if not already)
3. Search **"App Passwords"** → Create one for "Mail"
4. Copy the 16-character password → use as `MAIL_PASS`

---

## Image Usage

| Asset | Used In |
|---|---|
| `trojan_source.gif` | Hero section — animated dragon |
| `logo_nobg.png` | Loader screen |
| `logo_nav.png` | Navbar logo |
| `logo_org.png` | About section (red on white, framed) |
| `logo_black.png` | Footer logo |
| `favicon.png` | Browser tab |

---

## Brand

- **Primary Red:** `#C8102E`
- **Background:** `#0A0A0A`
- **Surface:** `#111111`
- **Text:** `#F5F5F5`
- **Fonts:** Bebas Neue (display) · Rajdhani (UI) · Inter (body)
