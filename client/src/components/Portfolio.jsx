import React, { useState } from 'react'

const categories = ['All', 'Web', 'App', 'Software', 'Marketing']

const projects = [
  { id: 1, title: 'Business Website Platform', cat: 'Web', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Full-stack business website solution with CMS and admin dashboard.', status: 'Delivered' },
  { id: 2, title: 'Android Booking App', cat: 'App', tech: ['Kotlin', 'Firebase'], desc: 'Android app for service booking with real-time availability tracking.', status: 'Delivered' },
  { id: 3, title: 'Enterprise Software Suite', cat: 'Software', tech: ['Java', 'Spring', 'PostgreSQL'], desc: 'Custom enterprise software with modular architecture and reporting.', status: 'Delivered' },
  { id: 4, title: 'SEO Campaign Dashboard', cat: 'Marketing', tech: ['SEO', 'Analytics', 'PPC'], desc: 'Digital marketing dashboard with campaign tracking and analytics.', status: 'Delivered' },
  { id: 5, title: 'E-Commerce Development', cat: 'Web', tech: ['WordPress', 'WooCommerce', 'SEO'], desc: 'Full-featured e-commerce store with payment integration and optimization.', status: 'Delivered' },
  { id: 6, title: 'POS Software System', cat: 'Software', tech: ['Java', 'MySQL', 'Desktop'], desc: 'Point of sale software with inventory management and billing system.', status: 'Delivered' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <style>{`
        .portfolio { padding: 7rem 0; background: var(--bg-2); position: relative; }
        .portfolio::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(200,16,46,0.3), transparent); }
        .port-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 3rem 0; }
        .port-filter { font-family: 'Rajdhani', sans-serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.5rem 1.2rem; border: 1px solid var(--border-2); color: var(--text-2); transition: all 0.25s; background: none; }
        .port-filter:hover, .port-filter.active { border-color: #C8102E; color: #C8102E; }
        .port-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .port-card { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; padding: 2rem; position: relative; overflow: hidden; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .port-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #C8102E; transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
        .port-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 32px var(--shadow-lg); }
        .port-card:hover::before { transform: scaleX(1); }
        .port-cat { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #C8102E; margin-bottom: 0.75rem; }
        .port-title { font-family: 'Rajdhani', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text); margin-bottom: 0.75rem; }
        .port-desc { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--text-2); line-height: 1.7; margin-bottom: 1.25rem; }
        .port-tech { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .port-tech-tag { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; letter-spacing: 0.1em; padding: 0.15rem 0.5rem; background: var(--tag-bg); border: 1px solid var(--tag-border); color: var(--text-2); }
        .port-status { position: absolute; top: 1rem; right: 1rem; font-family: 'Rajdhani', sans-serif; font-size: 0.6rem; letter-spacing: 0.15em; color: #3a3; display: flex; align-items: center; gap: 0.3rem; }
        .port-status::before { content: ''; width: 5px; height: 5px; background: #3a3; border-radius: 50%; }
        .port-cta { text-align: center; margin-top: 3.5rem; }
        .port-cta p { font-family: 'Inter', sans-serif; color: var(--text-2); font-size: 0.9rem; margin-bottom: 1.5rem; }
        @media(max-width:900px) { .port-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:580px) { .port-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">PORTFOLIO</h2>
          <p className="section-sub">A selection of projects we've built and guided. Every one started as just an idea.</p>
          <div className="port-filters">
            {categories.map(c => (
              <button key={c} className={`port-filter ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <div className="port-grid">
            {filtered.map(p => (
              <div key={p.id} className="port-card">
                <div className="port-status">{p.status}</div>
                <div className="port-cat">{p.cat}</div>
                <div className="port-title">{p.title}</div>
                <p className="port-desc">{p.desc}</p>
                <div className="port-tech">
                  {p.tech.map(t => <span key={t} className="port-tech-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="port-cta">
            <p>Want to see your project here?</p>
            <a href="#contact" className="btn-primary">Start Your Project</a>
          </div>
        </div>
      </section>
    </>
  )
}
