import React from 'react'
import { Link } from 'react-router-dom'
import servicesImg from '/images/services/services-img3.jpg'
import appImg from '/images/services/team2.jpg'
import softwareImg from '/images/services/team.jpg'

export default function SoftwarePage() {
  return (
    <>
      <style>{`
        .page-banner { padding: 10rem 0 4rem; background: var(--bg-2); text-align: center; position: relative; }
        .page-banner h3 { font-family: var(--font-display); font-size: 3rem; letter-spacing: 0.05em; color: var(--text); }
        .page-banner ul { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem; font-family: var(--font-ui); font-size: 0.85rem; color: var(--text-2); }
        .page-banner ul a { color: var(--red); }
        .services-page { padding: 5rem 0; }
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .svc-card { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; overflow: hidden; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .svc-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 32px var(--shadow-lg); }
        .svc-card img { width: 100%; height: 200px; object-fit: cover; }
        .svc-card .content { padding: 1.5rem; }
        .svc-card .content i { font-size: 2rem; color: var(--red); margin-bottom: 0.75rem; display: block; }
        .svc-card .content span { font-family: var(--font-ui); font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); }
        .svc-card .content h3 { font-family: var(--font-ui); font-size: 1.1rem; font-weight: 700; color: var(--text); margin-top: 0.25rem; }
        @media(max-width:768px) { .svc-grid { grid-template-columns: 1fr; } .page-banner { padding: 7rem 0 3rem; } .services-page { padding: 3rem 0; } }
        @media(max-width:480px) { .svc-card .content { padding: 1rem; } }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <h3>Software Solutions</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><i className="bx bx-chevrons-right"></i></li>
            <li>Software Solutions</li>
          </ul>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Our Software Services</h2>
            <p className="section-sub" style={{ margin: '0.5rem auto 0' }}>We provide a wide variety of IT services to meet your business needs.</p>
          </div>
          <div className="svc-grid">
            {[
              { img: servicesImg, icon: 'flaticon-web-development', label: 'Web Services', title: 'Web Development' },
              { img: appImg, icon: 'flaticon-android', label: 'App Services', title: 'App Development' },
              { img: softwareImg, icon: 'flaticon-consulting', label: 'Software Services', title: 'Software Development' },
            ].map(s => (
              <div key={s.title} className="svc-card">
                <img src={s.img} alt={s.title} />
                <div className="content">
                  <i className={s.icon}></i>
                  <span>{s.label}</span>
                  <h3>{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
