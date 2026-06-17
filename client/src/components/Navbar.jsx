import React, { useState, useEffect } from 'react'
import logoNav from '../assets/logo_nav.png'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: all 0.4s ease;
          padding: ${scrolled ? '0.6rem 0' : '1.4rem 0'};
          background: ${scrolled ? 'rgba(10,10,10,0.96)' : 'transparent'};
          border-bottom: 1px solid ${scrolled ? 'rgba(200,16,46,0.18)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(16px)' : 'none'};
        }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; max-width:1200px; margin:0 auto; padding:0 2rem; }
        .nav-logo { display:flex; align-items:center; gap:0.6rem; }
        .nav-logo-img { height:38px; width:auto; object-fit:contain; }
        .nav-logo-text { font-family:'Bebas Neue',sans-serif; font-size:1.35rem; letter-spacing:0.15em; color:#F5F5F5; }
        .nav-logo-text span { color:#C8102E; }
        .nav-links { display:flex; align-items:center; gap:2.5rem; }
        .nav-link { font-family:'Rajdhani',sans-serif; font-size:0.82rem; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#666; transition:color 0.2s; position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:1px; background:#C8102E; transition:width 0.25s; }
        .nav-link:hover { color:#F5F5F5; }
        .nav-link:hover::after { width:100%; }
        .nav-cta { font-family:'Rajdhani',sans-serif; font-size:0.78rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; padding:0.55rem 1.3rem; border:1px solid #C8102E; color:#C8102E; transition:all 0.2s; clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px)); }
        .nav-cta:hover { background:#C8102E; color:#fff; }
        .hamburger { display:none; flex-direction:column; gap:5px; padding:4px; background:none; border:none; cursor:pointer; }
        .hamburger span { display:block; width:22px; height:1.5px; background:#F5F5F5; }
        @media(max-width:768px) { .nav-links{display:none;} .hamburger{display:flex;} }
        .mobile-menu {
          position:fixed; inset:0; background:#0A0A0A; z-index:999;
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2rem;
          transform:${open ? 'translateX(0)' : 'translateX(100%)'};
          transition:transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .mobile-link { font-family:'Bebas Neue',sans-serif; font-size:2.8rem; letter-spacing:0.08em; color:#F5F5F5; transition:color 0.2s; }
        .mobile-link:hover { color:#C8102E; }
        .mobile-close { position:absolute; top:1.5rem; right:2rem; font-family:'Rajdhani',sans-serif; font-size:0.75rem; letter-spacing:0.2em; color:#555; background:none; border:none; cursor:pointer; }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <img src={logoNav} alt="Trojan X" className="nav-logo-img" />
            <span className="nav-logo-text">TROJAN<span>X</span></span>
          </a>
          <div className="nav-links">
            {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#contact" className="nav-cta">Get a Quote</a>
          </div>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <button className="mobile-close" onClick={() => setOpen(false)}>✕ CLOSE</button>
        {links.map(l => (
          <a key={l.label} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>Get a Quote</a>
      </div>
    </>
  )
}
