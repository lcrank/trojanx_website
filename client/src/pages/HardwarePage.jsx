import React from 'react'
import { Link } from 'react-router-dom'
import camImg from '/images/services/cam.jpg'
import pcImg from '/images/services/pc.jpg'
import netImg from '/images/services/net.jpg'

export default function HardwarePage() {
  return (
    <>
      <style>{`
        .page-banner { padding: 10rem 0 4rem; background: var(--bg-2); text-align: center; position: relative; }
        .page-banner h3 { font-family: var(--font-display); font-size: 3rem; letter-spacing: 0.05em; color: var(--text); }
        .page-banner ul { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem; font-family: var(--font-ui); font-size: 0.85rem; color: var(--text-2); }
        .page-banner ul a { color: var(--red); }
        .hw-page { padding: 5rem 0; }
        .hw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .hw-card { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; padding: 2rem; text-align: center; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .hw-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 32px var(--shadow-lg); }
        .hw-card img { width: 100%; height: 180px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem; }
        .hw-card i { font-size: 2rem; color: var(--red); margin-bottom: 0.75rem; }
        .hw-card h3 { font-family: var(--font-ui); font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .hw-card p { font-size: 0.9rem; color: var(--text-2); line-height: 1.7; }
        @media(max-width:768px) { .hw-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <h3>Hardware Solutions</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><i className="bx bx-chevrons-right"></i></li>
            <li>Hardware Solutions</li>
          </ul>
        </div>
      </section>

      <section className="hw-page">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Hardware & Infrastructure</h2>
            <p className="section-sub" style={{ margin: '0.5rem auto 0' }}>Reliable hardware solutions and infrastructure services for your business.</p>
          </div>
          <div className="hw-grid">
            {[
              { img: camImg, icon: 'bx bx-camera', title: 'CCTV & Surveillance', desc: 'Security camera installation and monitoring solutions for safety.' },
              { img: pcImg, icon: 'bx bx-desktop', title: 'Computer Hardware', desc: 'Desktop and laptop hardware setup, repair, and maintenance.' },
              { img: netImg, icon: 'bx bx-wifi', title: 'Networking', desc: 'Network infrastructure setup, configuration, and management.' },
            ].map(h => (
              <div key={h.title} className="hw-card">
                <img src={h.img} alt={h.title} />
                <i className={h.icon}></i>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
