import React, { useRef, useEffect, useState } from 'react'

const services = [
  {
    icon: '🌐',
    code: '01',
    title: 'Web Development',
    desc: 'Professional, responsive websites built with modern stacks. From business sites to complex web applications — we deliver at every scale.',
    tags: ['React', 'Next.js', 'WordPress']
  },
  {
    icon: '📱',
    code: '02',
    title: 'App Development',
    desc: 'End-to-end mobile app development from ideation to deployment. We navigate every stage to bring your app to life.',
    tags: ['Kotlin', 'Java', 'Flutter']
  },
  {
    icon: '💻',
    code: '03',
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business needs. We engineer robust, scalable systems that drive results.',
    tags: ['Custom Software', 'API', 'Cloud']
  },
  {
    icon: '📈',
    code: '04',
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies that boost your online presence, drive traffic, and grow your business.',
    tags: ['SEO', 'Social Media', 'PPC']
  },
  {
    icon: '🎨',
    code: '05',
    title: 'Graphic Design',
    desc: 'Visual identity, branding, and creative design services that make your brand stand out in the digital landscape.',
    tags: ['Branding', 'UI/UX', 'Print']
  },
  {
    icon: '🎓',
    code: '06',
    title: 'Education',
    desc: 'IT education and training programs to upskill individuals and teams in modern technologies and best practices.',
    tags: ['Training', 'Workshops', 'Mentoring']
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
        .services { padding: 7rem 0; background: var(--bg); position: relative; }
        .services::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--border-2), transparent); }
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
        .svc-card { background: var(--card-bg); padding: 2.5rem; position: relative; overflow: hidden; transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s, box-shadow 0.3s; opacity: 0; transform: translateY(24px); border: 1.5px solid var(--border-2); border-radius: 8px; box-shadow: 0 2px 8px var(--shadow); }
        .svc-visible { opacity: 1; transform: translateY(0); }
        .svc-card:hover { background: var(--card-hover); box-shadow: 0 12px 32px var(--shadow-lg); border-color: var(--red); }
        .svc-card:hover .svc-hover-line { transform: scaleX(1); }
        .svc-card:hover .svc-icon { transform: scale(1.1); }
        .svc-code { font-family: var(--font-display); font-size: 4rem; color: rgba(200,16,46,0.7); position: absolute; top: 1rem; right: 1.5rem; line-height: 1; font-weight: 700; }
        .svc-icon { font-size: 2rem; margin-bottom: 1.25rem; display: inline-block; transition: transform 0.3s; }
        .svc-title { font-family: var(--font-ui); font-size: 1.2rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text); margin-bottom: 0.75rem; }
        .svc-desc { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-2); line-height: 1.8; margin-bottom: 1.5rem; }
        .svc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .svc-tag { font-family: var(--font-ui); font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.2rem 0.6rem; border: 1px solid var(--tag-border); color: var(--red); border-radius: 4px; background: var(--tag-bg); }
        .svc-hover-line { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--red), var(--red-light)); transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; border-radius: 0 0 8px 8px; }
        @media(max-width:900px) { .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:580px) { .svc-grid { grid-template-columns: 1fr; } }
        @media(max-width:480px) { .svc-card { padding: 1.5rem; } }
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
