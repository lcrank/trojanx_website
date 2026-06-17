require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}))
app.use(express.json({ limit: '10kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again later.' }
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, service, message } = req.body
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }
  try {
    await transporter.sendMail({
      from: `"Trojan X Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `[Trojan X] New Enquiry from ${name}`,
      html: `<div style="font-family:Arial;max-width:600px;background:#111;color:#eee;padding:2rem;border-left:3px solid #C8102E"><h2 style="color:#C8102E">New Enquiry</h2><p><b style="color:#C8102E">Name:</b> ${name}</p><p><b style="color:#C8102E">Email:</b> ${email}</p><p><b style="color:#C8102E">Service:</b> ${service}</p><p><b style="color:#C8102E">Message:</b><br/><span style="color:#aaa">${message.replace(/\n/g,'<br/>')}</span></p></div>`
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send. Please try again.' })
  }
})

app.get('/api/health', (_, res) => res.json({ status: 'ok', service: 'Trojan X API' }))

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../../client/dist')
  app.use(express.static(buildPath))
  app.get('*', (_, res) => res.sendFile(path.join(buildPath, 'index.html')))
}

app.listen(PORT, () => console.log(`Trojan X API running on port ${PORT}`))
