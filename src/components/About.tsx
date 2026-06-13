export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-image">
          <img src="/images/about-img1.jpg" alt="About Trojan X Solutions" />
        </div>
        <div className="about-content">
          <div className="section-title">
            <span>About Us</span>
            <h2>Right Partner for Software Innovation</h2>
            <p>
              Trojan X is a developing IT consulting firm. We help businesses reinvent and excel
              by establishing complete reliance on information technology and offering high quality
              consulting services.
            </p>
          </div>

          <ul className="about-features">
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>App Development</li>
            <li>Graphic Design</li>
            <li>Software Development</li>
            <li>Technical Training</li>
          </ul>

          <div className="about-stats">
            <div className="stat">
              <h3>05+</h3>
              <p>Delivered Goods</p>
            </div>
            <div className="stat">
              <h3>02+</h3>
              <p>IT Consulting</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
