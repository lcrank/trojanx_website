const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, service, message } = req.body || {}

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    // If mail not configured, just log and return success (dev mode)
    console.log('Contact form submission:', { name, email, service, message })
    return res.json({ success: true })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
    })

    await transporter.sendMail({
      from: `"Trojan X Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: email,
      subject: `[Trojan X] New Enquiry — ${service}`,
      html: `
        <div style="font-family:Arial;max-width:600px;margin:0 auto;background:#111;color:#eee;padding:2rem;border-left:3px solid #C8102E;">
          <h2 style="color:#C8102E;margin:0 0 1.5rem;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem;width:100px;">Name</td><td style="color:#fff;">${name}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem;">Email</td><td style="color:#fff;"><a href="mailto:${email}" style="color:#C8102E;">${email}</a></td></tr>
            <tr><td style="padding:0.5rem 0;color:#888;font-size:0.85rem;">Service</td><td style="color:#fff;">${service}</td></tr>
          </table>
          <div style="margin-top:1.5rem;padding:1rem;background:#1a1a1a;border-left:2px solid #C8102E;">
            <p style="color:#888;font-size:0.75rem;margin-bottom:0.5rem;letter-spacing:0.1em;">MESSAGE</p>
            <p style="color:#ccc;line-height:1.7;margin:0;">${message.replace(/\n/g,'<br/>')}</p>
          </div>
        </div>
      `
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send. Please email us directly at hello@trojanx.in' })
  }
}
