import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '#', dropdown: [
    { label: 'Software Solutions', href: '/services/software' },
    { label: 'Hardware Solutions', href: '/services/hardware' },
    { label: 'Blog', href: '/blog' },
  ]},
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    if (href === '#') return false
    return location.pathname.startsWith(href)
  }

  const serviceActive = location.pathname.startsWith('/services') || location.pathname.startsWith('/blog')

  return (
    <>
      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; transition: all 0.3s; padding: ${scrolled ? '0.6rem 0' : '1.25rem 0'}; background: ${scrolled ? 'var(--nav-bg)' : 'transparent'}; border-bottom: 1px solid ${scrolled ? 'var(--border-2)' : 'transparent'}; backdrop-filter: ${scrolled ? 'blur(14px)' : 'none'}; box-shadow: ${scrolled ? '0 1px 8px var(--shadow)' : 'none'}; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .nav-logo { display: flex; align-items: center; gap: 0.75rem; }
        .nav-logo-img { width: 38px; height: 38px; background-size: contain; background-repeat: no-repeat; background-position: center; background-image: var(--logo-img); }
        .nav-logo-text { font-family: var(--font-display); font-size: 1.35rem; letter-spacing: 0.15em; color: var(--text); line-height: 1; }
        .nav-logo-text span { color: var(--red); }
        .nav-links { display: flex; align-items: center; gap: 2rem; }
        .nav-link { font-family: var(--font-ui); font-size: 0.82rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-2); transition: color 0.2s; position: relative; cursor: pointer; background: none; border: none; padding: 0; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--red); transition: width 0.25s; border-radius: 1px; }
        .nav-link:hover { color: var(--text); }
        .nav-link.active::after { width: 100%; }
        .nav-link.active { color: var(--red); font-weight: 700; }
        .nav-link .arrow { font-size: 0.55rem; margin-left: 4px; display: inline-block; transition: transform 0.2s; }
        .nav-item-wrap { position: relative; }
        .nav-item-wrap:hover .arrow { transform: rotate(180deg); }
        .nav-dropdown { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(8px); background: var(--card-bg); border: 1px solid var(--border-2); min-width: 200px; padding: 0.4rem 0; opacity: 0; visibility: hidden; transition: all 0.25s; box-shadow: 0 8px 24px var(--shadow-lg); border-radius: 6px; }
        .nav-dropdown.show, .nav-item-wrap:hover .nav-dropdown { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
        .nav-dropdown a { display: block; padding: 0.5rem 1.25rem; font-family: var(--font-ui); font-size: 0.78rem; letter-spacing: 0.1em; color: var(--text-2); transition: all 0.15s; white-space: nowrap; }
        .nav-dropdown a:hover { color: var(--red); background: var(--tag-bg); }
        .nav-cta { font-family: var(--font-ui); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.55rem 1.35rem; border: 1.5px solid var(--red); color: var(--red); transition: all 0.25s; border-radius: 6px; }
        .nav-cta:hover { background: var(--red); color: #fff; }
        .hamburger { display: none; flex-direction: column; gap: 5px; padding: 4px; background: none; border: none; }
        .hamburger span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 1px; transition: transform 0.3s, opacity 0.3s; }
        @media(max-width:768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
        .mobile-menu { position: fixed; inset: 0; background: var(--bg); z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; transform: ${open ? 'translateX(0)' : 'translateX(100%)'}; transition: transform 0.4s cubic-bezier(0.77,0,0.18,1); }
        .mobile-link { font-family: var(--font-display); font-size: 2.8rem; letter-spacing: 0.1em; color: var(--text); transition: color 0.2s; background: none; border: none; }
        .mobile-link:hover { color: var(--red); }
        .mobile-close { position: absolute; top: 1.5rem; right: 2rem; font-family: var(--font-ui); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--text-2); background: none; border: none; }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-img" />
            <div className="nav-logo-text">TROJAN<span>X</span></div>
          </Link>
          <div className="nav-links">
            {links.map(l => l.dropdown ? (
              <div key={l.label} className="nav-item-wrap">
                <span className={`nav-link ${serviceActive ? 'active' : ''}`}>
                  {l.label} <span className="arrow">▼</span>
                </span>
                <div className="nav-dropdown">
                  {l.dropdown.map(d => (
                    <Link key={d.label} to={d.href} className="nav-link" onClick={() => setOpen(false)}>{d.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.label} to={l.href} className={`nav-link ${isActive(l.href) ? 'active' : ''}`}>{l.label}</Link>
            ))}
            <Link to="/contact" className="nav-cta">Get a Quote</Link>
          </div>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <button className="mobile-close" onClick={() => setOpen(false)}>✕ CLOSE</button>
        {links.map(l => l.dropdown ? (
          <div key={l.label} style={{ textAlign: 'center' }}>
            <span className="mobile-link" style={{ cursor: 'default', fontSize: '2.2rem' }}>{l.label}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
              {l.dropdown.map(d => (
                <Link key={d.label} to={d.href} className="mobile-link" style={{ fontSize: '1.6rem', color: 'var(--text-2)' }} onClick={() => setOpen(false)}>{d.label}</Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={l.label} to={l.href} className="mobile-link" onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link to="/contact" className="btn-primary" onClick={() => setOpen(false)}>Get a Quote</Link>
      </div>
    </>
  )
}
