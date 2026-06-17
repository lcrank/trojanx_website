import React, { useEffect, useRef } from 'react'
import homeFiveImg from '/images/home-five-img.png'

const words = ['WEBSITES', 'APPS', 'IoT SYSTEMS', 'SOLUTIONS', 'CONSULTING']

export default function Hero() {
  const wordRef = useRef(null)
  const idx = useRef(0)

  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    let timeout
    const cycle = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      timeout = setTimeout(() => {
        idx.current = (idx.current + 1) % words.length
        el.textContent = words[idx.current]
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        timeout = setTimeout(cycle, 2400)
      }, 400)
    }
    timeout = setTimeout(cycle, 2400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <style>{`
        .hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding-top: 80px; }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-bg-glow { position: absolute; top: -20%; right: -10%; width: 60vw; height: 60vw; background: radial-gradient(circle, var(--glow) 0%, transparent 65%); border-radius: 50%; pointer-events: none; }
        .hero-bg-glow2 { position: absolute; bottom: -20%; left: -10%; width: 40vw; height: 40vw; background: radial-gradient(circle, var(--glow-2) 0%, transparent 65%); border-radius: 50%; pointer-events: none; }
        .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        .hero-eyebrow { font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.4em; text-transform: uppercase; color: var(--red); display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; font-weight: 700; }
        .hero-eyebrow::before { content: ''; width: 30px; height: 1.5px; background: var(--red); }
        .hero-headline { font-family: var(--font-display); font-size: clamp(3.5rem, 7vw, 6rem); line-height: 0.95; letter-spacing: 0.02em; color: var(--text); margin-bottom: 1.5rem; }
        .hero-headline .accent { color: var(--red); display: block; }
        .hero-word { display: inline-block; color: var(--red); transition: opacity 0.3s ease, transform 0.3s ease; }
        .hero-desc { font-family: var(--font-body); font-size: 1rem; color: var(--text-2); line-height: 1.8; max-width: 480px; margin-bottom: 2.5rem; }
        .hero-desc strong { color: var(--text); font-weight: 600; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 2.5rem; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--border-2); }
        .stat-num { font-family: var(--font-display); font-size: 2.5rem; color: var(--text); line-height: 1; }
        .stat-num span { color: var(--red); }
        .stat-label { font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.2em; color: var(--text-3); text-transform: uppercase; margin-top: 0.2rem; font-weight: 600; }
        .hero-visual { display: flex; align-items: center; justify-content: center; position: relative; }
        .hero-logo-wrap { position: relative; width: 380px; height: 380px; }
        .hero-logo-img { width: 100%; height: 100%; object-fit: contain; animation: heroFloat 5s ease-in-out infinite; filter: drop-shadow(0 0 40px rgba(200,16,46,0.15)); }
        @keyframes heroFloat { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
        .hero-ring { position: absolute; inset: -20px; border: 1px solid rgba(200,16,46,0.15); border-radius: 50%; animation: rotateSlow 20s linear infinite; }
        .hero-ring::after { content: ''; position: absolute; top: -4px; left: 50%; width: 8px; height: 8px; background: var(--red); border-radius: 50%; transform: translateX(-50%); box-shadow: 0 0 12px var(--red); }
        .hero-ring2 { position: absolute; inset: -50px; border: 1px solid rgba(200,16,46,0.07); border-radius: 50%; animation: rotateSlow 35s linear infinite reverse; }
        @keyframes rotateSlow { to { transform: rotate(360deg); } }
        .hero-tag { position: absolute; background: var(--card-bg); border: 1px solid rgba(200,16,46,0.2); padding: 0.6rem 1rem; font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--text-2); backdrop-filter: blur(8px); border-radius: 6px; font-weight: 600; box-shadow: 0 4px 12px var(--shadow); }
        .hero-tag.t1 { top: 10%; right: -5%; }
        .hero-tag.t2 { bottom: 10%; left: -5%; }
        .hero-tag .dot { display: inline-block; width: 6px; height: 6px; background: var(--red); border-radius: 50%; margin-right: 0.5rem; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        @media(max-width:900px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-visual { display: none; }
          .hero-eyebrow { justify-content: center; }
          .hero-desc { margin: 0 auto 2.5rem; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; }
        }
        @media(max-width:600px) {
          .hero-stats { gap: 1.5rem; flex-wrap: wrap; justify-content: center; }
          .hero-stats > * { flex: 0 0 calc(50% - 1rem); }
          .hero-headline { font-size: clamp(2.5rem, 10vw, 3.5rem); }
          .hero-desc { font-size: 0.9rem; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-bg-glow" />
          <div className="hero-bg-glow2" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">TECHNOLOGY & IT SOLUTIONS</div>
            <h1 className="hero-headline">
              WE'RE ADVANCED<br />
              ANALYTICS SOFTWARE<br />
              <span ref={wordRef} className="hero-word">{words[0]}</span>
            </h1>
            <p className="hero-desc">
              <strong>Trojan <span style={{color: 'var(--red)'}}>X</span></strong>, a developing IT consulting firm, we help businesses to reinvent and excel by establishing complete reliance on information technology and offering high quality technology consulting services.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-outline">Start a Project</a>
            </div>
            <div className="hero-stats">
              {[['05+','Delivered Goods'],['02+','IT Consulting'],['07+','Fully Launched'],['10+','Projects Completed']].map(([n,l]) => (
                <div key={l}>
                  <div className="stat-num">{n.replace('+','')}<span>+</span></div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-logo-wrap">
              <div className="hero-ring" />
              <div className="hero-ring2" />
              <img src={homeFiveImg} alt="Trojan X" className="hero-logo-img" />
              <div className="hero-tag t1"><span className="dot"/>Web Development</div>
              <div className="hero-tag t2"><span className="dot"/>IoT & Embedded</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
