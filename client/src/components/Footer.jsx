import React from 'react'
import logoBlack from '../assets/logo_black.png'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer { background:#050505; border-top:1px solid rgba(255,255,255,0.04); padding:3.5rem 0 2rem; }
        .footer-inner { display:grid; grid-template-columns:2fr 1fr 1fr; gap:3rem; margin-bottom:3rem; }
        .footer-brand { display:flex; flex-direction:column; gap:1.25rem; }
        .footer-logo { display:flex; align-items:center; gap:0.75rem; }
        .footer-logo img { height:42px; width:auto; object-fit:contain; }
        .footer-logo-text { font-family:'Bebas Neue',sans-serif; font-size:1.35rem; letter-spacing:0.15em; }
        .footer-logo-text span { color:#C8102E; }
        .footer-tagline { font-family:'Inter',sans-serif; font-size:0.83rem; color:#333; line-height:1.75; max-width:270px; }
        .footer-col-title { font-family:'Rajdhani',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.32em; text-transform:uppercase; color:#C8102E; margin-bottom:1.25rem; }
        .footer-links { display:flex; flex-direction:column; gap:0.65rem; }
        .footer-link { font-family:'Inter',sans-serif; font-size:0.83rem; color:#333; transition:color 0.2s; }
        .footer-link:hover { color:#F5F5F5; }
        .footer-bottom { display:flex; align-items:center; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.04); padding-top:2rem; }
        .footer-copy { font-family:'Rajdhani',sans-serif; font-size:0.72rem; letter-spacing:0.12em; color:#2a2a2a; }
        .footer-copy span { color:#C8102E; }
        .footer-sub { font-family:'Rajdhani',sans-serif; font-size:0.65rem; letter-spacing:0.18em; color:#1e1e1e; }
        @media(max-width:768px) { .footer-inner{grid-template-columns:1fr;} .footer-bottom{flex-direction:column;gap:1rem;text-align:center;} }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo">
                {/* logo_black = red dragon on black — blends perfectly in dark footer */}
                <img src={logoBlack} alt="Trojan X" />
                <div className="footer-logo-text">TROJAN<span>X</span></div>
              </div>
              <p className="footer-tagline">Your idea. Our execution. From concept to code — we make it possible.</p>
            </div>
            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-links">
                {['Business Websites','Personal Portfolios','Android Apps','IoT Projects','Career Guidance'].map(s => (
                  <a key={s} href="#services" className="footer-link">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-links">
                {[['About Us','#about'],['Portfolio','#portfolio'],['Career','#career'],['Contact','#contact'],['hello@trojanx.in','mailto:hello@trojanx.in']].map(([l,h]) => (
                  <a key={l} href={h} className="footer-link">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© {new Date().getFullYear()} <span>Trojan X Solutions</span>. All rights reserved.</div>
            <div className="footer-sub">BUILT WITH PRECISION · DELIVERED WITH PURPOSE</div>
          </div>
        </div>
      </footer>
    </>
  )
}
