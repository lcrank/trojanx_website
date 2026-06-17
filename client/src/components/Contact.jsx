import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name:'', email:'', service:'', message:'' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .contact { padding:7rem 0; background:#111; position:relative; }
        .contact::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(200,16,46,0.3),transparent); }
        .contact-inner { display:grid; grid-template-columns:1fr 1.4fr; gap:5rem; margin-top:3.5rem; }
        .contact-info h3 { font-family:'Rajdhani',sans-serif; font-size:1rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:#F5F5F5; margin-bottom:0.6rem; }
        .contact-info p { font-family:'Inter',sans-serif; font-size:0.875rem; color:#444; line-height:1.8; margin-bottom:2rem; }
        .cdetail { display:flex; gap:1rem; align-items:flex-start; margin-bottom:1.5rem; }
        .cdetail-icon { width:36px; height:36px; border:1px solid rgba(200,16,46,0.25); display:flex; align-items:center; justify-content:center; font-size:0.9rem; flex-shrink:0; }
        .cdetail-label { font-family:'Rajdhani',sans-serif; font-size:0.62rem; letter-spacing:0.22em; text-transform:uppercase; color:#C8102E; }
        .cdetail-val { font-family:'Inter',sans-serif; font-size:0.83rem; color:#666; margin-top:0.15rem; }
        .cform { display:flex; flex-direction:column; gap:1rem; }
        .frow { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
        .ffield { display:flex; flex-direction:column; gap:0.4rem; }
        .flabel { font-family:'Rajdhani',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#444; }
        .finput, .fselect, .ftextarea { background:#0A0A0A; border:1px solid rgba(255,255,255,0.06); color:#F5F5F5; font-family:'Inter',sans-serif; font-size:0.875rem; padding:0.85rem 1rem; outline:none; transition:border-color 0.25s; width:100%; }
        .finput:focus,.fselect:focus,.ftextarea:focus { border-color:rgba(200,16,46,0.45); }
        .fselect { appearance:none; cursor:pointer; }
        .fselect option { background:#111; }
        .ftextarea { resize:vertical; min-height:130px; }
        .fstatus { font-family:'Rajdhani',sans-serif; font-size:0.83rem; letter-spacing:0.1em; padding:0.75rem; margin-top:0.75rem; text-align:center; }
        .fstatus.sent { background:rgba(40,160,40,0.08); border:1px solid rgba(40,160,40,0.2); color:#4a4; }
        .fstatus.error { background:rgba(200,16,46,0.08); border:1px solid rgba(200,16,46,0.2); color:#C8102E; }
        @media(max-width:900px) { .contact-inner{grid-template-columns:1fr;} .frow{grid-template-columns:1fr;} }
      `}</style>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-label">Let's Talk</div>
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-inner">
            <div className="contact-info">
              <h3>Ready to build something?</h3>
              <p>Tell us about your project or problem. We'll respond within 24 hours with a clear plan of action.</p>
              {[
                { icon:'📧', label:'Email', val:'hello@trojanx.in' },
                { icon:'📍', label:'Based In', val:'India — Remote Worldwide' },
                { icon:'⚡', label:'Response Time', val:'Within 24 hours' },
              ].map(d => (
                <div key={d.label} className="cdetail">
                  <div className="cdetail-icon">{d.icon}</div>
                  <div>
                    <div className="cdetail-label">{d.label}</div>
                    <div className="cdetail-val">{d.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <form className="cform" onSubmit={handleSubmit}>
              <div className="frow">
                <div className="ffield">
                  <label className="flabel">Name</label>
                  <input className="finput" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required/>
                </div>
                <div className="ffield">
                  <label className="flabel">Email</label>
                  <input className="finput" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required/>
                </div>
              </div>
              <div className="ffield">
                <label className="flabel">Service Needed</label>
                <select className="fselect" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  <option>Business Website</option>
                  <option>Personal Portfolio</option>
                  <option>Android App Guidance</option>
                  <option>IoT / Embedded Project</option>
                  <option>Career Guidance</option>
                  <option>Custom Solution</option>
                </select>
              </div>
              <div className="ffield">
                <label className="flabel">Tell Us Your Idea / Problem</label>
                <textarea className="ftextarea" name="message" value={form.message} onChange={handleChange} placeholder="Describe what you need or the problem you're facing..." required/>
              </div>
              <button type="submit" className="btn-primary" disabled={status==='sending'} style={{width:'100%',justifyContent:'center',opacity:status==='sending'?0.6:1}}>
                {status==='sending' ? 'Sending...' : 'Send Message →'}
              </button>
              {status==='sent' && <div className="fstatus sent">✓ Message received! We'll be in touch within 24 hours.</div>}
              {status==='error' && <div className="fstatus error">Something went wrong. Email us directly at hello@trojanx.in</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
