const services = [
  {
    icon: '🖥',
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern frameworks and best practices.',
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'End-to-end software design, development, and deployment services.',
  },
  {
    icon: '🎯',
    title: 'Job Consulting',
    desc: 'Career guidance, resume building, interview prep, and job placement assistance.',
  },
  {
    icon: '📋',
    title: 'Project Guidance',
    desc: 'Expert mentorship for academic and professional projects — from planning to execution.',
  },
  {
    icon: '📚',
    title: 'Technical Training',
    desc: 'Hands-on training in web development, programming, and modern technologies.',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    desc: 'SEO, social media management, and paid advertising to grow your online presence.',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Brand identity, UI/UX design, and visual content creation.',
  },
  {
    icon: '🔧',
    title: 'IT Consulting',
    desc: 'Strategic technology advice to help you choose the right tools and architecture.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title">
          <span>Our Services</span>
          <h2>We Provide a Wide Variety of IT Services</h2>
          <p>From development to consulting and training — we help you succeed at every step.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
