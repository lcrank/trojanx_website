import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer { background: var(--bg-2); border-top: 1px solid var(--border); padding: 3rem 0 2rem; }
        .footer-inner { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
        .footer-brand { display: flex; flex-direction: column; gap: 1rem; }
        .footer-logo { display: flex; align-items: center; gap: 0.75rem; }
        .footer-logo-img { width: 36px; height: 36px; object-fit: contain; content: var(--logo-img); }
        .footer-logo-text { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; letter-spacing: 0.15em; color: var(--text); }
        .footer-logo-text span { color: #C8102E; }
        .footer-tagline { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--text-2); line-height: 1.7; max-width: 300px; }
        .footer-col-title { font-family: 'Rajdhani', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: #C8102E; margin-bottom: 1.25rem; }
        .footer-links { display: flex; flex-direction: column; gap: 0.6rem; }
        .footer-link { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--text-2); transition: color 0.2s; }
        .footer-link:hover { color: var(--text); }
        .footer-bottom { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border); padding-top: 2rem; }
        .footer-copy { font-family: 'Rajdhani', sans-serif; font-size: 0.75rem; letter-spacing: 0.1em; color: var(--text-2); }
        .footer-copy span { color: #C8102E; }
        .footer-sub { font-family: 'Rajdhani', sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; color: var(--text-2); }
        @media(max-width:768px) { .footer-inner { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; } }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-img" style={{ width: 36, height: 36, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: 'var(--logo-img)' }} />
                <div className="footer-logo-text">TROJAN<span>X</span></div>
              </div>
              <p className="footer-tagline">We are committed to providing the highest level of customer service and support, ensuring that our clients have a seamless experience from start to finish with our software solutions.</p>
            </div>
            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-links">
                {['Web Development','App Development','Software Development','Graphic Design','Digital Marketing','Education'].map(s => (
                  <Link key={s} to="/services/software" className="footer-link">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-links">
                {[['About Us','/about'],['Services','/services/software'],['Contact','/contact'],['support@trojanx.in','mailto:support@trojanx.in']].map(([l,h]) => (
                  h.startsWith('mailto') ? <a key={l} href={h} className="footer-link">{l}</a> : <Link key={l} to={h} className="footer-link">{l}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© {new Date().getFullYear()} <span>Trojanx</span>. All Rights Reserved by <a href="https://trojanx.in/" target="_blank" rel="noopener noreferrer" style={{color: '#C8102E'}}>TROJAN X</a></div>
            <div className="footer-sub">TECHNOLOGY & IT SOLUTIONS</div>
          </div>
        </div>
      </footer>
    </>
  )
}
