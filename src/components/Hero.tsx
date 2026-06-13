export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Advanced <span>Analytics</span><br />
            Software Solutions
          </h1>
          <p>
            We help businesses reinvent and excel by establishing complete reliance on
            information technology and offering high quality technology consulting services.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary" onClick={e => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Our Services →
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/home-five-img.png" alt="Technology solutions" />
        </div>
      </div>
    </section>
  )
}
