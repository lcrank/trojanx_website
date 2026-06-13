import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/images/logo-2.png" alt="Trojan X Solutions" className="logo-img" />
            </Link>
            <p>
              We are committed to providing the highest level of customer service and support,
              ensuring that our clients have a seamless experience from start to finish.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>Web Development</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Software Services</a></li>
              <li><a href="#services">Job Consulting</a></li>
              <li><a href="#services">Project Guidance</a></li>
              <li><a href="#services">Training</a></li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:support@trojanx.in">support@trojanx.in</a></li>
              <li><a href="https://www.trojanx.in" target="_blank" rel="noopener noreferrer">www.trojanx.in</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright &copy; {new Date().getFullYear()} Trojan X Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
