import React from 'react'

const tracks = [
  { icon: '🖥️', title: 'Web Development', desc: 'Structured learning paths from HTML/CSS to advanced frameworks like React and Node.js.', badge: 'Available' },
  { icon: '📱', title: 'App Development', desc: 'Java/Kotlin fundamentals to publishing your first app on the Play Store.', badge: 'Available' },
  { icon: '💻', title: 'Software Development', desc: 'Full-stack development, data structures, and software engineering best practices.', badge: 'Available' },
  { icon: '🎨', title: 'Graphic Design', desc: 'UI/UX design, branding, and visual communication skills for digital media.', badge: 'Coming Soon' },
]

export default function CareerGuidance() {
  return (
    <>
      <style>{`
        .career { padding: 7rem 0; background: var(--bg); }
        .career-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .career-tracks { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .track { padding: 1.75rem; border: 1.5px solid var(--border-2); border-radius: 8px; position: relative; transition: border-color 0.3s, background 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .track:hover { border-color: var(--red); background: var(--tag-bg); box-shadow: 0 8px 24px var(--shadow-lg); }
        .track-icon { font-size: 1.75rem; margin-bottom: 1rem; }
        .track-title { font-family: 'Rajdhani', sans-serif; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); margin-bottom: 0.5rem; }
        .track-desc { font-family: 'Inter', sans-serif; font-size: 0.8rem; color: var(--text-2); line-height: 1.7; }
        .track-badge { position: absolute; top: 0.75rem; right: 0.75rem; font-family: 'Rajdhani', sans-serif; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.15rem 0.5rem; }
        .track-badge.available { background: rgba(40,160,40,0.15); border: 1px solid rgba(40,160,40,0.3); color: #4a4; }
        .track-badge.soon { background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.25); color: #C8102E; }
        .career-note { margin-top: 2rem; padding: 1.5rem; background: var(--tag-bg); border-left: 2px solid #C8102E; }
        .career-note p { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
        .career-note strong { color: var(--text); }
        @media(max-width:900px) { .career-inner { grid-template-columns: 1fr; } }
        @media(max-width:580px) { .career-tracks { grid-template-columns: 1fr; } }
      `}</style>

      <section className="career section" id="career">
        <div className="container">
          <div className="career-inner">
            <div>
              <div className="section-label">Grow With Us</div>
              <h2 className="section-title">CAREER<br/>GUIDANCE</h2>
              <p className="section-sub" style={{ marginBottom: '2rem' }}>
                As a IT Education provider, we offer training in Web Development, App Development, Software Development and Graphic Design to help you build your career in technology.
              </p>
              <a href="#contact" className="btn-primary">Get Started</a>
              <div className="career-note" style={{ marginTop: '2rem' }}>
                <p><strong>Note:</strong> Our education and training programs are designed for beginners and professionals alike. Reach out to us for a personalised roadmap.</p>
              </div>
            </div>
            <div className="career-tracks">
              {tracks.map(t => (
                <div key={t.title} className="track">
                  <div className={`track-badge ${t.badge === 'Available' ? 'available' : 'soon'}`}>
                    {t.badge}
                  </div>
                  <div className="track-icon">{t.icon}</div>
                  <div className="track-title">{t.title}</div>
                  <div className="track-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
