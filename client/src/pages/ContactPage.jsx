import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <>
      <style>{`
        .page-banner { padding: 10rem 0 4rem; background: var(--bg-2); text-align: center; position: relative; }
        .page-banner h3 { font-family: var(--font-display); font-size: 3rem; letter-spacing: 0.05em; color: var(--text); }
        .page-banner ul { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem; font-family: var(--font-ui); font-size: 0.85rem; color: var(--text-2); }
        .page-banner ul a { color: var(--red); }
        .contact-info-block { padding: 5rem 0; background: var(--bg); }
        .contact-info-block .row { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; }
        .contact-info-block .info h2 { font-family: var(--font-display); font-size: 2.5rem; letter-spacing: 0.02em; color: var(--text); margin-bottom: 0.5rem; }
        .contact-info-block .info span { font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--red); font-weight: 700; }
        .contact-info-block .info p { color: var(--text-2); margin-bottom: 2rem; line-height: 1.7; }
        .contact-detail { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
        .contact-detail .icon { width: 40px; height: 40px; border: 1px solid var(--border-2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--red); flex-shrink: 0; }
        .contact-detail .label { font-family: var(--font-ui); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); }
        .contact-detail .val { font-family: var(--font-body); font-size: 0.9rem; color: var(--text-2); }
        .contact-detail .val a { color: var(--text-2); transition: color 0.2s; }
        .contact-detail .val a:hover { color: var(--red); }
        .map-area { padding: 0; }
        .map-area iframe { width: 100%; height: 400px; border: 0; }
        @media(max-width:768px) { .contact-info-block .row { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <h3>Contact Us</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><i className="bx bx-chevrons-right"></i></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      <section className="contact-info-block">
        <div className="container">
          <div className="row">
            <div className="info">
              <span>Contact Info</span>
              <h2>Let's Connect With Us</h2>
              <p>Keep in touch with us for more software services and technical support. Stay support us.</p>
              {[
                { icon: 'bx bx-phone-call', label: 'Phone Number', val: '+91 93854 03922', href: 'tel:+919385403922' },
                { icon: 'bx bxs-map', label: 'Address', val: 'Ponmalaipatti, Trichy, Tamilnadu' },
                { icon: 'bx bx-message', label: 'Email', val: 'trojanx2022@gmail.com', href: 'mailto:trojanx2022@gmail.com' },
              ].map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="icon"><i className={d.icon}></i></div>
                  <div>
                    <div className="label">{d.label}</div>
                    <div className="val">{d.href ? <a href={d.href}>{d.val}</a> : d.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8707507825701!2d78.73499796954006!3d10.774270416799075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5c8775a5217%3A0xddaaf09784fe6531!2sTrojan%20X%20Solutions!5e0!3m2!1sen!2sin!4v1700333621649!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Trojan X Location"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
