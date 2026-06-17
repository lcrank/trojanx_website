import React, { useRef, useEffect, useState } from 'react'
import aboutImg from '/images/about-img1.jpg'

const pillars = [
  { title: 'Right Partner', desc: 'Right Partner for Software Innovation — we provide the perfect solution for your requirements.' },
  { title: 'Full Service', desc: 'Web Development, App Development, Software Development, Digital Marketing, Graphic Design & Education.' },
  { title: 'Quality First', desc: 'We are committed to providing the highest level of customer service and support for seamless experience.' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .about { padding: 7rem 0; background: var(--bg); position: relative; }
        .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-visual { position: relative; display: flex; align-items: center; justify-content: center; }
        .about-img-wrap { position: relative; width: 320px; height: 320px; }
        .about-img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; filter: drop-shadow(0 0 60px rgba(200,16,46,0.2)); }
        .about-frame { position: absolute; inset: -20px; border: 1px solid rgba(200,16,46,0.12); }
        .about-frame::before { content: 'TROJAN X SOLUTIONS'; position: absolute; top: -10px; left: 20px; font-family: 'Rajdhani', sans-serif; font-size: 0.6rem; letter-spacing: 0.3em; background: var(--bg); padding: 0 0.5rem; color: #C8102E; }
        .about-badge { position: absolute; bottom: -30px; right: -30px; background: #C8102E; padding: 1.5rem; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
        .about-badge-num { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: #fff; line-height: 1; }
        .about-badge-txt { font-family: 'Rajdhani', sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; color: rgba(255,255,255,0.8); }
        .about-content { transition: opacity 0.7s ease, transform 0.7s ease; opacity: ${visible ? 1 : 0}; transform: ${visible ? 'translateY(0)' : 'translateY(30px)'}; }
        .about-pillars { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2.5rem; }
        .pillar { display: flex; gap: 1rem; padding: 1.25rem; border: 1.5px solid var(--border-2); border-radius: 8px; transition: border-color 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .pillar:hover { border-color: var(--red); box-shadow: 0 8px 24px var(--shadow-lg); }
        .pillar-num { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: #C8102E; line-height: 1; flex-shrink: 0; }
        .pillar-title { font-family: 'Rajdhani', sans-serif; font-size: 0.9rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); margin-bottom: 0.3rem; }
        .pillar-desc { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
        @media(max-width:900px) {
          .about-inner { grid-template-columns: 1fr; }
          .about-visual { display: none; }
        }
        @media(max-width:480px) { .pillar { padding: 1rem; } }
      `}</style>

      <section className="about section" id="about" ref={ref}>
        <div className="container">
          <div className="about-inner">
            <div className="about-visual">
              <div className="about-img-wrap">
                <div className="about-frame" />
                <img src={aboutImg} alt="About Trojan X" className="about-img" />
                <div className="about-badge">
                  <div className="about-badge-num">10+</div>
                  <div className="about-badge-txt">PROJECTS<br/>COMPLETED</div>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">RIGHT PARTNER<br/>FOR SOFTWARE<br/>INNOVATION</h2>
              <p className="section-sub">
                As a Software Company we provide Web development, App development, Digital marketing, Education on information technology and offering high quality technology consulting services. Perfect Solution for your Requirements.
              </p>
              <div className="about-pillars">
                {pillars.map((p, i) => (
                  <div key={p.title} className="pillar">
                    <div className="pillar-num">0{i+1}</div>
                    <div>
                      <div className="pillar-title">{p.title}</div>
                      <div className="pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
