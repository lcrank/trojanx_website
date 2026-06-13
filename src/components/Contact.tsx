import { useState, type FormEvent } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initial: FormData = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormData>(initial)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const mailto = `mailto:support@trojanx.in?subject=New inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
    setForm(initial)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title">
          <span>Get in Touch</span>
          <h2>Let's Build Something Great Together</h2>
          <p>Have a project in mind? Need consulting or training? Reach out and we'll get back to you.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Talk to Our Support</h3>
            <p>
              We are committed to providing the highest level of customer service and support,
              ensuring our clients have a seamless experience.
            </p>
            <ul className="contact-details">
              <li>
                <span>📧</span>
                <a href="mailto:support@trojanx.in">support@trojanx.in</a>
              </li>
              <li>
                <span>🌐</span>
                <a href="https://www.trojanx.in" target="_blank" rel="noopener noreferrer">www.trojanx.in</a>
              </li>
              <li>
                <span>📍</span>
                <span>Remote — Available Worldwide</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="form-success">
                Thank you! We'll get back to you shortly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 234 567 890" />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="software-development">Software Development</option>
                <option value="job-consulting">Job Consulting</option>
                <option value="project-guidance">Project Guidance</option>
                <option value="training">Technical Training</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or inquiry..." />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
