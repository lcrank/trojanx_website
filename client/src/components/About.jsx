import React, { useRef, useEffect, useState } from 'react'
import logoOrg from '../assets/logo_org.png'

const pillars = [
  { title: 'Idea → Reality', desc: 'You bring the dream. We bring the technical firepower to make it real.' },
  { title: 'Problem → Solution', desc: "No idea yet? That's fine. Describe your challenge and we'll engineer the answer." },
  { title: 'Guidance First', desc: 'We believe in teaching while building — every project is a learning opportunity.' },
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
        .about { padding:7rem 0; background:#0A0A0A; }
        .about-inner { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; }
        .about-visual { position:relative; display:flex; align-items:center; justify-content:center; }
        .about-img-wrap { position:relative; }
        .about-img { width:340px; height:auto; object-fit:contain; border-radius:2px; }
        .about-frame { position:absolute; inset:-16px; border:1px solid rgba(200,16,46,0.15); pointer-events:none; }
        .about-frame::before { content:'TROJAN X SOLUTIONS'; position:absolute; top:-10px; left:20px; font-family:'Rajdhani',sans-serif; font-size:0.58rem; letter-spacing:0.3em; background:#0A0A0A; padding:0 0.5rem; color:#C8102E; }
        .about-badge { position:absolute; bottom:-28px; right:-28px; background:#C8102E; padding:1.4rem 1.6rem; clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px)); text-align:center; }
        .about-badge-num { font-family:'Bebas Neue',sans-serif; font-size:2.2rem; color:#fff; line-height:1; }
        .about-badge-txt { font-family:'Rajdhani',sans-serif; font-size:0.62rem; letter-spacing:0.15em; color:rgba(255,255,255,0.75); margin-top:0.1rem; }
        .about-content { opacity:${visible?1:0}; transform:${visible?'translateY(0)':'translateY(30px)'}; transition:opacity 0.7s ease,transform 0.7s ease; }
        .about-pillars { display:flex; flex-direction:column; gap:1.25rem; margin-top:2.5rem; }
        .pillar { display:flex; gap:1rem; padding:1.25rem; border:1px solid rgba(255,255,255,0.05); transition:border-color 0.3s,background 0.3s; }
        .pillar:hover { border-color:rgba(200,16,46,0.25); background:rgba(200,16,46,0.02); }
        .pillar-num { font-family:'Bebas Neue',sans-serif; font-size:1.5rem; color:#C8102E; line-height:1; flex-shrink:0; width:28px; }
        .pillar-title { font-family:'Rajdhani',sans-serif; font-size:0.9rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#F5F5F5; margin-bottom:0.3rem; }
        .pillar-desc { font-family:'Inter',sans-serif; font-size:0.83rem; color:#555; line-height:1.75; }
        @media(max-width:900px) { .about-inner{grid-template-columns:1fr;} .about-visual{display:none;} }
      `}</style>

      <section className="about section" id="about" ref={ref}>
        <div className="container">
          <div className="about-inner">
            <div className="about-visual">
              <div className="about-img-wrap">
                <div className="about-frame"/>
                {/* logo_org = red dragon on white — works great in the dark-framed box */}
                <img src={logoOrg} alt="Trojan X Logo" className="about-img"/>
                <div className="about-badge">
                  <div className="about-badge-num">3+</div>
                  <div className="about-badge-txt">YEARS<br/>BUILDING</div>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">BUILT ON<br/>BOLD IDEAS</h2>
              <p className="section-sub">
                Trojan X Solutions is a service-driven startup that thrives on turning ambitious ideas into working digital products. Websites, apps, embedded systems, and career pathways — with a core belief: if you have the problem, we have the solution.
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
