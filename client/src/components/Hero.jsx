import React, { useEffect, useRef } from 'react'
import heroGif from '../assets/trojan_source.gif'

const words = ['WEBSITES', 'ANDROID APPS', 'IoT SYSTEMS', 'SOLUTIONS']

export default function Hero() {
  const wordRef = useRef(null)
  const idx = useRef(0)

  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    let timeout
    const cycle = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(12px)'
      timeout = setTimeout(() => {
        idx.current = (idx.current + 1) % words.length
        el.textContent = words[idx.current]
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        timeout = setTimeout(cycle, 2600)
      }, 350)
    }
    timeout = setTimeout(cycle, 2600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <style>{`
        .hero { min-height:100vh; display:flex; align-items:center; position:relative; overflow:hidden; padding-top:80px; }
        .hero-glow1 { position:absolute; top:-15%; right:-8%; width:55vw; height:55vw; background:radial-gradient(circle,rgba(200,16,46,0.1) 0%,transparent 65%); border-radius:50%; pointer-events:none; }
        .hero-glow2 { position:absolute; bottom:-20%; left:-10%; width:40vw; height:40vw; background:radial-gradient(circle,rgba(200,16,46,0.05) 0%,transparent 65%); border-radius:50%; pointer-events:none; }
        .hero-inner { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:0 2rem; width:100%; }
        .hero-eyebrow { font-family:'Rajdhani',sans-serif; font-size:0.72rem; letter-spacing:0.42em; text-transform:uppercase; color:#C8102E; display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; }
        .hero-eyebrow::before { content:''; width:28px; height:1px; background:#C8102E; }
        .hero-headline { font-family:'Bebas Neue',sans-serif; font-size:clamp(3.2rem,6.5vw,5.5rem); line-height:0.95; letter-spacing:0.02em; margin-bottom:1.5rem; }
        .hero-word { display:inline-block; color:#C8102E; transition:opacity 0.3s ease,transform 0.3s ease; }
        .hero-desc { font-family:'Inter',sans-serif; font-size:1rem; color:#666; line-height:1.85; max-width:460px; margin-bottom:2.5rem; }
        .hero-desc strong { color:#aaa; font-weight:500; }
        .hero-actions { display:flex; gap:1rem; flex-wrap:wrap; }
        .hero-stats { display:flex; gap:2.5rem; margin-top:3.5rem; padding-top:2rem; border-top:1px solid rgba(255,255,255,0.05); }
        .stat-num { font-family:'Bebas Neue',sans-serif; font-size:2.4rem; color:#F5F5F5; line-height:1; }
        .stat-num span { color:#C8102E; }
        .stat-label { font-family:'Rajdhani',sans-serif; font-size:0.7rem; letter-spacing:0.2em; color:#444; text-transform:uppercase; margin-top:0.2rem; }
        .hero-visual { display:flex; align-items:center; justify-content:center; position:relative; }
        .hero-gif-wrap { position:relative; width:420px; height:248px; }
        .hero-gif { width:100%; height:100%; object-fit:contain; animation:heroFloat 6s ease-in-out infinite; filter:drop-shadow(0 0 50px rgba(200,16,46,0.25)); border-radius:4px; }
        @keyframes heroFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
        .hero-ring-outer { position:absolute; inset:-30px; border:1px solid rgba(200,16,46,0.1); border-radius:50%; animation:rotateSlow 25s linear infinite; }
        .hero-ring-outer::after { content:''; position:absolute; top:-4px; left:50%; width:8px; height:8px; background:#C8102E; border-radius:50%; transform:translateX(-50%); box-shadow:0 0 14px #C8102E; }
        @keyframes rotateSlow { to{transform:rotate(360deg);} }
        .hero-tag { position:absolute; background:rgba(17,17,17,0.92); border:1px solid rgba(200,16,46,0.18); padding:0.55rem 0.9rem; font-family:'Rajdhani',sans-serif; font-size:0.7rem; letter-spacing:0.1em; color:#666; backdrop-filter:blur(8px); white-space:nowrap; }
        .hero-tag .dot { display:inline-block; width:5px; height:5px; background:#C8102E; border-radius:50%; margin-right:0.45rem; animation:blink 2s ease-in-out infinite; }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
        .hero-tag.t1 { top:-10px; right:-20px; }
        .hero-tag.t2 { bottom:-10px; left:-20px; }
        @media(max-width:900px) {
          .hero-inner { grid-template-columns:1fr; text-align:center; }
          .hero-visual { display:none; }
          .hero-eyebrow { justify-content:center; }
          .hero-desc { margin:0 auto 2.5rem; }
          .hero-actions { justify-content:center; }
          .hero-stats { justify-content:center; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-glow1"/>
        <div className="hero-glow2"/>
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Your Idea. Our Execution.</div>
            <h1 className="hero-headline">
              WE BUILD<br/>
              <span ref={wordRef} className="hero-word">{words[0]}</span><br/>
              THAT MATTER
            </h1>
            <p className="hero-desc">
              From <strong>business websites</strong> to <strong>IoT systems</strong> — Trojan X Solutions turns your vision into reality. No idea yet? Just give us the problem. <strong>We'll provide the solution.</strong>
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-outline">Start a Project</a>
            </div>
            <div className="hero-stats">
              {[['50','Projects Built'],['3+','Years Active'],['100%','Client Focus']].map(([n,l]) => (
                <div key={l}>
                  <div className="stat-num">{n}<span>{n==='100%'?'':n.includes('+')?'':'+' }</span></div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-gif-wrap">
              <div className="hero-ring-outer"/>
              <img src={heroGif} alt="Trojan X Dragon" className="hero-gif"/>
              <div className="hero-tag t1"><span className="dot"/>Web &amp; App Dev</div>
              <div className="hero-tag t2"><span className="dot"/>IoT &amp; Embedded</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
