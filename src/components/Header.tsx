import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/images/logo-1.png" alt="Trojan X Solutions" className="logo-img" />
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={e => handleClick(e, item.href)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={e => handleClick(e, '#contact')}>
            Get a Quote
          </a>
        </nav>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
