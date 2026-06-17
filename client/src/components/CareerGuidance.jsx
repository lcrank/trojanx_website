import React from 'react'

const tracks = [
  { icon: '🖥️', title: 'Web Development', desc: 'HTML → CSS → JS → React/Node.js — structured learning paths for aspiring web devs.', badge: 'Available' },
  { icon: '📱', title: 'Android Development', desc: 'Java/Kotlin fundamentals to publishing your first app on the Play Store.', badge: 'Available' },
  { icon: '⚙️', title: 'Embedded & IoT', desc: 'Electronics basics, microcontrollers, sensor interfacing, and IoT architecture.', badge: 'Available' },
  { icon: '💼', title: 'Job Consultancy', desc: 'Resume building, interview prep, and job placement assistance for tech roles.', badge: 'Coming Soon' },
]

export default function CareerGuidance() {
  return (
    <>
      <style>{`
        .career { padding: 7rem 0; background: #0A0A0A; }
        .career-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .career-tracks { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .track { padding: 1.75rem; border: 1px solid rgba(255,255,255,0.05); position: relative; transition: border-color 0.3s, background 0.3s; }
        .track:hover { border-color: rgba(200,16,46,0.25); background: rgba(200,16,46,0.03); }
        .track-icon { font-size: 1.75rem; margin-bottom: 1rem; }
        .track-title { font-family: 'Rajdhani', sans-serif; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #F5F5F5; margin-bottom: 0.5rem; }
        .track-desc { font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #555; line-height: 1.7; }
        .track-badge { position: absolute; top: 0.75rem; right: 0.75rem; font-family: 'Rajdhani', sans-serif; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.15rem 0.5rem; }
        .track-badge.available { background: rgba(40,160,40,0.15); border: 1px solid rgba(40,160,40,0.3); color: #4a4; }
        .track-badge.soon { background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.25); color: #C8102E; }
        .career-note { margin-top: 2rem; padding: 1.5rem; background: rgba(200,16,46,0.06); border-left: 2px solid #C8102E; }
        .career-note p { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #777; line-height: 1.7; }
        .career-note strong { color: #F5F5F5; }
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
                We're not just builders — we're mentors. Whether you're starting from scratch or upskilling, Trojan X guides you through the tech career landscape.
              </p>
              <a href="#contact" className="btn-primary">Get Guided</a>
              <div className="career-note" style={{ marginTop: '2rem' }}>
                <p><strong>Note:</strong> Career guidance and consultancy services are in early access. Reach out to us directly and we'll craft a personalised roadmap for you.</p>
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
