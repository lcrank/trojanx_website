# 🐉 Trojan X Solutions — Website

Official website for Trojan X Solutions built with **React + Vite** (frontend) and **Node.js + Express** (backend).

---

## 📁 Project Structure

```
trojanx/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/   # All UI components
│   │   └── assets/       # Logo, favicon
│   └── vite.config.js    # Build + obfuscation config
├── server/          # Node.js API
│   └── src/index.js
├── vercel.json      # Vercel deployment config
└── package.json     # Root monorepo scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Configure Environment
```bash
cp server/.env.example server/.env
# Fill in your Gmail credentials (use App Password)
```

### 3. Run Locally
```bash
npm run dev
# Client: http://localhost:5173
# Server: http://localhost:5000
```

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Set these **Environment Variables** in Vercel Dashboard:
- `MAIL_USER` — your Gmail address
- `MAIL_PASS` — Gmail App Password (not your regular password)
- `MAIL_TO` — where contact form emails go (e.g. hello@trojanx.in)
- `ALLOWED_ORIGIN` — your Vercel URL (e.g. https://trojanx.vercel.app)
- `NODE_ENV` — `production`

---

## 🔐 Code Protection

The build uses **Terser** with aggressive mangling (`toplevel: true`, 3 compression passes) and randomised chunk filenames. For maximum protection, install the full obfuscator:

```bash
cd client
npm install --save-dev javascript-obfuscator vite-plugin-javascript-obfuscator
```

Then uncomment the obfuscator block in `vite.config.js`.

---

## 📧 Email Setup (Gmail)

1. Go to Google Account → Security → 2-Step Verification → **App Passwords**
2. Generate a password for "Mail"
3. Use it as `MAIL_PASS` in `.env`

---

## 🎨 Brand Colors
- Primary Red: `#C8102E`
- Background: `#0A0A0A`
- Surface: `#111111`
- Text: `#F5F5F5`

---

*Built by Trojan X Solutions · trojanx.in*
