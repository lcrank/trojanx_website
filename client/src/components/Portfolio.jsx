import React, { useState } from 'react'

const categories = ['All', 'Web', 'App', 'IoT', 'Portfolio']

const projects = [
  { id: 1, title: 'E-Commerce Platform', cat: 'Web', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Full-stack e-commerce solution with payment integration and admin dashboard.', status: 'Delivered' },
  { id: 2, title: 'Smart Home Controller', cat: 'IoT', tech: ['ESP32', 'MQTT', 'React'], desc: 'IoT dashboard to control and monitor home devices remotely via web interface.', status: 'Delivered' },
  { id: 3, title: 'Developer Portfolio', cat: 'Portfolio', tech: ['Next.js', 'Framer Motion'], desc: 'Sleek personal portfolio with animated project showcases and blog.', status: 'Delivered' },
  { id: 4, title: 'Restaurant Booking App', cat: 'App', tech: ['Flutter', 'Firebase'], desc: 'Android app for restaurant table reservations with real-time slot tracking.', status: 'Delivered' },
  { id: 5, title: 'Agency Business Site', cat: 'Web', tech: ['WordPress', 'SEO', 'UI/UX'], desc: 'Marketing agency website with CMS, landing pages and conversion optimization.', status: 'Delivered' },
  { id: 6, title: 'Weather IoT Station', cat: 'IoT', tech: ['Arduino', 'Sensors', 'Dashboard'], desc: 'Embedded weather monitoring station with cloud sync and analytics dashboard.', status: 'Delivered' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <style>{`
        .portfolio { padding: 7rem 0; background: #111; position: relative; }
        .portfolio::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(200,16,46,0.3), transparent); }
        .port-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 3rem 0; }
        .port-filter { font-family: 'Rajdhani', sans-serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.5rem 1.2rem; border: 1px solid rgba(255,255,255,0.1); color: #666; transition: all 0.25s; }
        .port-filter:hover, .port-filter.active { border-color: #C8102E; color: #C8102E; }
        .port-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .port-card { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.05); padding: 2rem; position: relative; overflow: hidden; transition: border-color 0.3s, transform 0.3s; }
        .port-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #C8102E; transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
        .port-card:hover { border-color: rgba(200,16,46,0.2); transform: translateY(-4px); }
        .port-card:hover::before { transform: scaleX(1); }
        .port-cat { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #C8102E; margin-bottom: 0.75rem; }
        .port-title { font-family: 'Rajdhani', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #F5F5F5; margin-bottom: 0.75rem; }
        .port-desc { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #555; line-height: 1.7; margin-bottom: 1.25rem; }
        .port-tech { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .port-tech-tag { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; letter-spacing: 0.1em; padding: 0.15rem 0.5rem; background: rgba(200,16,46,0.08); border: 1px solid rgba(200,16,46,0.15); color: #888; }
        .port-status { position: absolute; top: 1rem; right: 1rem; font-family: 'Rajdhani', sans-serif; font-size: 0.6rem; letter-spacing: 0.15em; color: #3a3; display: flex; align-items: center; gap: 0.3rem; }
        .port-status::before { content: ''; width: 5px; height: 5px; background: #3a3; border-radius: 50%; }
        .port-cta { text-align: center; margin-top: 3.5rem; }
        .port-cta p { font-family: 'Inter', sans-serif; color: #666; font-size: 0.9rem; margin-bottom: 1.5rem; }
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
