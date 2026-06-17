import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring_pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px'
        dot.current.style.top = pos.current.y + 'px'
      }
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + 'px'
        ring.current.style.top = ring_pos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnter = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(2)')
    const onLeave = () => ring.current && (ring.current.style.transform = 'translate(-50%,-50%) scale(1)')
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  // Only show on desktop
  if (window.innerWidth < 768) return null

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div ref={dot} style={{
        position: 'fixed', width: 6, height: 6, background: '#C8102E',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 99999,
        transform: 'translate(-50%,-50%)', transition: 'none'
      }} />
      <div ref={ring} style={{
        position: 'fixed', width: 28, height: 28,
        border: '1px solid rgba(200,16,46,0.6)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 99998,
        transform: 'translate(-50%,-50%)', transition: 'transform 0.3s ease'
      }} />
    </>
  )
}
