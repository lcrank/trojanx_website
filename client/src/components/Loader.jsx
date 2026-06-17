import React, { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 15
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, gap: '2rem'
    }}>
      <div style={{ position: 'relative', width: 120, height: 120 }}>
        <svg width="120" height="120" style={{ position: 'absolute', top: 0, left: 0, animation: 'spin 2s linear infinite' }}>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(200,16,46,0.15)" strokeWidth="2" />
          <circle cx="60" cy="60" r="54" fill="none" stroke="#C8102E" strokeWidth="2"
            strokeDasharray="339" strokeDashoffset={339 - (339 * Math.min(progress, 100)) / 100}
            strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.15s ease' }} />
        </svg>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 70, height: 70,
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          backgroundImage: 'var(--logo-img)'
        }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.3em', color: 'var(--text)' }}>
          TROJAN X
        </div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.7rem', letterSpacing: '0.4em', color: '#C8102E', marginTop: '0.25rem' }}>
          SOLUTIONS
        </div>
      </div>
      <div style={{ width: 200, height: 1, background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%',
          background: '#C8102E', width: `${Math.min(progress, 100)}%`,
          transition: 'width 0.15s ease'
        }} />
      </div>
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-2)' }}>
        INITIALISING SYSTEMS...
      </div>
    </div>
  )
}
