import React, { useRef, useEffect, useState } from 'react'

const services = [
  {
    icon: '🌐',
    code: '01',
    title: 'Business Websites',
    desc: 'Professional, fast, and fully responsive websites designed to convert visitors into clients. Built with modern stacks.',
    tags: ['React', 'Next.js', 'WordPress']
  },
  {
    icon: '🎨',
    code: '02',
    title: 'Personal Portfolios',
    desc: 'Distinctive portfolio sites that showcase your work and personal brand with style and impact.',
    tags: ['Custom Design', 'SEO', 'CMS']
  },
  {
    icon: '📱',
    code: '03',
    title: 'Android Apps',
    desc: 'Guided app development from ideation to deployment. We help you navigate every stage of Android development.',
    tags: ['Kotlin', 'Java', 'Flutter']
  },
  {
    icon: '⚡',
    code: '04',
    title: 'IoT & Embedded Systems',
    desc: 'Hardware meets software. We design and guide IoT and embedded projects — from Raspberry Pi to custom PCBs.',
    tags: ['Arduino', 'ESP32', 'Raspberry Pi']
  },
  {
    icon: '💼',
    code: '05',
    title: 'Business Portfolios',
    desc: 'Compelling company profile sites that communicate your brand story, services, and value proposition.',
    tags: ['Branding', 'UI/UX', 'SEO']
  },
  {
    icon: '🚀',
    code: '06',
    title: 'Custom Solutions',
    desc: 'Have a problem without a solution? Bring it to us. We analyze, plan, and build what doesn\'t exist yet.',
    tags: ['Consulting', 'Architecture', 'Dev']
  }
]

function ServiceCard({ service, i }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`svc-card ${visible ? 'svc-visible' : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>
      <div className="svc-code">{service.code}</div>
      <div className="svc-icon">{service.icon}</div>
      <h3 className="svc-title">{service.title}</h3>
      <p className="svc-desc">{service.desc}</p>
      <div className="svc-tags">
        {service.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
      </div>
      <div className="svc-hover-line" />
    </div>
  )
}

export default function Services() {
  return (
    <>
      <style>{`
        .services { padding: 7rem 0; background: #111; position: relative; }
        .services::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(200,16,46,0.3), transparent); }
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.04); margin-top: 4rem; }
        .svc-card { background: #111; padding: 2.5rem; position: relative; overflow: hidden; transition: opacity 0.6s ease, transform 0.6s ease; opacity: 0; transform: translateY(24px); }
        .svc-visible { opacity: 1; transform: translateY(0); }
        .svc-card:hover .svc-hover-line { transform: scaleX(1); }
        .svc-card:hover .svc-icon { transform: scale(1.1); }
        .svc-card:hover { background: #141414; }
        .svc-code { font-family: 'Bebas Neue', sans-serif; font-size: 4rem; color: rgba(200,16,46,0.08); position: absolute; top: 1rem; right: 1.5rem; line-height: 1; }
        .svc-icon { font-size: 2rem; margin-bottom: 1.25rem; display: inline-block; transition: transform 0.3s; }
        .svc-title { font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #F5F5F5; margin-bottom: 0.75rem; }
        .svc-desc { font-family: 'Inter', sans-serif; font-size: 0.875rem; color: #666; line-height: 1.8; margin-bottom: 1.5rem; }
        .svc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .svc-tag { font-family: 'Rajdhani', sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.2rem 0.6rem; border: 1px solid rgba(200,16,46,0.25); color: #C8102E; }
        .svc-hover-line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: #C8102E; transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
        @media(max-width:900px) { .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:580px) { .svc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-sub">From concept to deployment — we cover the full spectrum of digital product development.</p>
          <div className="svc-grid">
            {services.map((s, i) => <ServiceCard key={s.code} service={s} i={i} />)}
          </div>
        </div>
      </section>
    </>
  )
}
