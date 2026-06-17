require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000
const isProd = process.env.NODE_ENV === 'production'

// ── Security ─────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors({
  origin: isProd ? process.env.ALLOWED_ORIGIN || '*' : '*',
  methods: ['GET', 'POST', 'OPTIONS'],
}))
app.use(express.json({ limit: '10kb' }))

// ── Rate Limiter ──────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' }
})

// ── Mail Transporter ──────────────────────────────
const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
})

// ── API Routes ────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, service, message } = req.body || {}
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log('[contact]', { name, email, service, message })
    return res.json({ success: true })
  }
  try {
    await createTransporter().sendMail({
      from: `"Trojan X Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: email,
      subject: `[Trojan X] New Enquiry — ${service}`,
      html: `
        <div style="font-family:Arial;max-width:600px;background:#111;color:#eee;padding:2rem;border-left:3px solid #C8102E">
          <h2 style="color:#C8102E;margin:0 0 1.5rem">New Contact Form Submission</h2>
          <p><b style="color:#C8102E">Name:</b> ${name}</p>
          <p><b style="color:#C8102E">Email:</b> <a href="mailto:${email}" style="color:#C8102E">${email}</a></p>
          <p><b style="color:#C8102E">Service:</b> ${service}</p>
          <div style="margin-top:1rem;padding:1rem;background:#1a1a1a;border-left:2px solid #C8102E">
            <p style="color:#888;font-size:0.75rem;margin:0 0 0.5rem;letter-spacing:0.1em">MESSAGE</p>
            <p style="color:#ccc;line-height:1.7;margin:0">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>`
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ error: 'Failed to send. Please email hello@trojanx.in directly.' })
  }
})

app.get('/api/health', (_, res) => res.json({ status: 'ok', service: 'Trojan X API', env: process.env.NODE_ENV }))

// ── Serve React Build ─────────────────────────────
// In production (Railway), serve the pre-built client/dist
const buildPath = path.join(__dirname, '../../client/dist')
app.use(express.static(buildPath))
// SPA fallback — all non-API routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🐉 Trojan X running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`)
})
