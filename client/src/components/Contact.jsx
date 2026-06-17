import React, { useState, useId } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')
  const nameId = useId()
  const emailId = useId()
  const serviceId = useId()
  const messageId = useId()
  const statusId = useId()

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .contact { padding: 7rem 0; background: var(--bg); position: relative; }
        .contact::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--border-2), transparent); }
        .contact-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; }
        .contact-info-card { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; padding: 2rem 2.5rem; box-shadow: 0 2px 8px var(--shadow); }
        .contact-info-card h3 { font-family: 'Rajdhani', sans-serif; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text); margin-bottom: 0.5rem; }
        .contact-info-card p { font-family: 'Inter', sans-serif; font-size: 0.875rem; color: var(--text-2); line-height: 1.7; margin-bottom: 2rem; }
        .contact-detail { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
        .contact-detail:last-child { margin-bottom: 0; }
        .contact-detail-icon { width: 36px; height: 36px; border: 1px solid rgba(200,16,46,0.3); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
        .contact-detail-label { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #C8102E; font-weight: 700; }
        .contact-detail-val { font-family: 'Inter', sans-serif; font-size: 0.875rem; color: var(--text-2); margin-top: 0.15rem; }
        .contact-form { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; padding: 2rem 2.5rem; box-shadow: 0 2px 8px var(--shadow); display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-label { font-family: 'Rajdhani', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-2); }
        .form-input, .form-select, .form-textarea { background: var(--bg); border: 1px solid var(--border-2); border-radius: 6px; color: var(--text); font-family: 'Inter', sans-serif; font-size: 0.875rem; padding: 0.85rem 1rem; outline: none; transition: border-color 0.25s, box-shadow 0.25s; width: 100%; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: #C8102E; box-shadow: 0 0 0 2px rgba(200,16,46,0.15); }
        .form-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555770' d='M6 8L1 3h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
        .form-select option { background: var(--bg-2); color: var(--text); }
        .form-textarea { resize: vertical; min-height: 130px; }
        .form-submit { margin-top: 0.5rem; }
        .form-status { font-family: 'Rajdhani', sans-serif; font-size: 0.85rem; letter-spacing: 0.1em; padding: 0.75rem; margin-top: 1rem; text-align: center; border-radius: 6px; }
        .form-status.sent { background: rgba(40,160,40,0.1); border: 1px solid rgba(40,160,40,0.25); color: #2a7a2a; }
        .form-status.error { background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.25); color: #C8102E; }
        @media(max-width:900px) { .contact-inner { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-label">Let's Talk</div>
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-inner" style={{ marginTop: '3.5rem' }}>
            <div className="contact-info-card">
              <h3>Ready to build something?</h3>
              <p>Tell us about your project or problem. We'll respond within 24 hours with a plan of action.</p>
              {[
                { icon: '📧', label: 'Email', val: 'trojanx2022@gmail.com' },
                { icon: '📞', label: 'Phone', val: '+91 93854 03922' },
                { icon: '📍', label: 'Address', val: 'Ponmalaipatti, Trichy, Tamilnadu' },
                { icon: '⚡', label: 'Response Time', val: 'Within 24 hours' },
              ].map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="contact-detail-icon" aria-hidden="true">{d.icon}</div>
                  <div>
                    <div className="contact-detail-label">{d.label}</div>
                    <div className="contact-detail-val">{d.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor={nameId}>Name</label>
                  <input className="form-input" id={nameId} name="name" value={form.name} onChange={handleChange} placeholder="Your name" required aria-required="true" autoComplete="name" />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor={emailId}>Email</label>
                  <input className="form-input" id={emailId} type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required aria-required="true" autoComplete="email" />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor={serviceId}>Service Needed</label>
                <select className="form-select" id={serviceId} name="service" value={form.service} onChange={handleChange} required aria-required="true">
                  <option value="">Select a service...</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Software Development</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                  <option>Education</option>
                  <option>Custom Solution</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor={messageId}>Tell Us Your Idea / Problem</label>
                <textarea className="form-textarea" id={messageId} name="message" value={form.message} onChange={handleChange} placeholder="Describe what you need or the problem you're facing..." required aria-required="true" />
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
              {status === 'sent' && <div className="form-status sent" id={statusId} role="alert" aria-live="polite">✓ Message received! We'll be in touch within 24 hours.</div>}
              {status === 'error' && <div className="form-status error" id={statusId} role="alert" aria-live="polite">Something went wrong. Please email us directly at trojanx2022@gmail.com</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
