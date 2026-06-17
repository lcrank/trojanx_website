import React, { useEffect, useState } from 'react'
import logoNoBg from '../assets/logo_nobg.png'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return Math.min(p + Math.random() * 14, 100)
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0A0A0A',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, gap: '2rem'
    }}>
      <div style={{ position: 'relative', width: 130, height: 130 }}>
        <svg width="130" height="130" style={{ position: 'absolute', inset: 0 }}>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}} .spin{transform-origin:65px 65px;animation:spin 2.2s linear infinite}`}</style>
          <circle cx="65" cy="65" r="58" fill="none" stroke="rgba(200,16,46,0.12)" strokeWidth="2"/>
          <g className="spin">
            <circle cx="65" cy="65" r="58" fill="none" stroke="#C8102E" strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 58 * Math.min(progress,100) / 100} ${2 * Math.PI * 58}`}
              strokeLinecap="round" style={{transition:'stroke-dasharray 0.12s ease'}}/>
          </g>
        </svg>
        <img src={logoNoBg} alt="Trojan X" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 75, height: 75, objectFit: 'contain'
        }}/>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'2rem', letterSpacing:'0.35em', color:'#F5F5F5' }}>
          TROJAN<span style={{color:'#C8102E'}}>X</span>
        </div>
        <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:'0.65rem', letterSpacing:'0.45em', color:'#555', marginTop:'0.25rem' }}>
          SOLUTIONS
        </div>
      </div>
      <div style={{ width:200, height:1, background:'rgba(255,255,255,0.06)', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', left:0, top:0, height:'100%',
          background:'#C8102E', width:`${Math.min(progress,100)}%`,
          transition:'width 0.12s ease'
        }}/>
      </div>
      <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:'0.7rem', letterSpacing:'0.25em', color:'#333', textTransform:'uppercase' }}>
        Initialising Systems...
      </div>
    </div>
  )
}
