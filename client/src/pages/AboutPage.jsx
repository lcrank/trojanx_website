import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '/images/about-img1.jpg'
import chooseImg from '/images/choose-img.jpg'

export default function AboutPage() {
  return (
    <>
      <style>{`
        .page-banner { padding: 10rem 0 4rem; background: var(--bg-2); text-align: center; position: relative; }
        .page-banner h3 { font-family: var(--font-display); font-size: 3rem; letter-spacing: 0.05em; color: var(--text); }
        .page-banner ul { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem; font-family: var(--font-ui); font-size: 0.85rem; color: var(--text-2); }
        .page-banner ul a { color: var(--red); }
        .about-block { padding: 5rem 0; }
        .about-block .row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-block .content h2 { font-family: var(--font-display); font-size: 2.5rem; letter-spacing: 0.02em; color: var(--text); margin-bottom: 1rem; }
        .about-block .content p { color: var(--text-2); line-height: 1.8; margin-bottom: 1.5rem; }
        .about-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.5rem; }
        .about-list li { font-family: var(--font-ui); color: var(--text); display: flex; align-items: center; gap: 0.5rem; }
        .about-list li i { color: var(--red); }
        .choose-block { padding: 5rem 0; background: var(--bg-2); }
        .choose-block .row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .choose-block .content h2 { font-family: var(--font-display); font-size: 2.5rem; letter-spacing: 0.02em; color: var(--text); margin-bottom: 1rem; }
        .choose-block .content h4 { font-family: var(--font-body); font-size: 1.1rem; color: var(--text-2); line-height: 1.7; margin-bottom: 1.5rem; font-weight: 400; }
        .choose-block .content span.sp { color: var(--red); font-family: var(--font-ui); font-size: 0.75rem; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 700; }
        .process-block { padding: 5rem 0; }
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
        .process-card { padding: 2rem; border: 1.5px solid var(--border-2); border-radius: 8px; background: var(--card-bg); transition: border-color 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .process-card:hover { border-color: var(--red); box-shadow: 0 8px 24px var(--shadow-lg); }
        .process-card i { font-size: 2rem; color: var(--red); margin-bottom: 1rem; }
        .process-card h3 { font-family: var(--font-ui); font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .process-card p { font-size: 0.9rem; color: var(--text-2); line-height: 1.7; }
        .stats-block { padding: 5rem 0; background: var(--bg-2); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
        .stat-card i { font-size: 2rem; color: var(--red); margin-bottom: 0.75rem; }
        .stat-card h3 { font-family: var(--font-display); font-size: 2.5rem; color: var(--text); }
        .stat-card h3 span { color: var(--red); }
        .stat-card span { font-family: var(--font-ui); font-size: 0.8rem; letter-spacing: 0.15em; color: var(--text-2); text-transform: uppercase; }
        .cta-block { padding: 4rem; background: var(--red); text-align: center; }
        .cta-block h2 { font-family: var(--font-display); font-size: 2.5rem; color: #fff; margin-bottom: 0.5rem; }
        .cta-block p { color: rgba(255,255,255,0.8); margin-bottom: 1.5rem; }
        .cta-block .btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #fff; color: var(--red); padding: 0.9rem 2rem; font-family: var(--font-ui); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; transition: transform 0.2s; }
        .cta-block .btn:hover { transform: translateY(-2px); }
        @media(max-width:768px) { .about-block .row, .choose-block .row { grid-template-columns: 1fr; } .process-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><i className="bx bx-chevrons-right"></i></li>
            <li>About Us</li>
          </ul>
        </div>
      </section>

      <section className="about-block">
        <div className="container">
          <div className="row">
            <div>
              <img src={aboutImg} alt="About Trojan X" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div className="content">
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>Right Partner for Software Innovation</span>
              <p>Provide perfect Solution for your Requirements.</p>
              <div className="about-list">
                <div>
                  <li><i className="bx bxs-check-circle"></i> Web Development</li>
                  <li><i className="bx bxs-check-circle"></i> App Development</li>
                  <li><i className="bx bxs-check-circle"></i> Software Development</li>
                </div>
                <div>
                  <li><i className="bx bxs-check-circle"></i> Digital Marketing</li>
                  <li><i className="bx bxs-check-circle"></i> Graphic Design</li>
                  <li><i className="bx bxs-check-circle"></i> Education</li>
                </div>
              </div>
              <p>As a Software Company we provide Web development, App development, Digital marketing, Education on information technology and offering high quality technology consulting services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-block">
        <div className="container">
          <div className="row">
            <div className="content">
              <span className="sp">Who we are</span>
              <h4>As a developing IT firm, we offer an extensive array of services, including software development, web development, and IT consulting.</h4>
              <br />
              <span className="sp">What we do</span>
              <h4>Our team possesses a diverse set of skills, and we are always on the lookout for innovative and creative strategies to help our clients achieve their goals.</h4>
            </div>
            <div>
              <img src={chooseImg} alt="Choose Trojan X" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="process-block">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>IT Security & Computing</span>
            <h2 style={{ fontSize: '2rem' }}>How Our Services Will Help You to Grow Your Business</h2>
          </div>
          <div className="process-grid">
            {[
              { icon: 'flaticon-project', title: 'Discover', desc: 'We get the requirements and discover the problem in it for providing solution for your problem.' },
              { icon: 'flaticon-chip', title: 'Planning', desc: 'Plan according to the requirements gathered from you and make a plan for that.' },
              { icon: 'flaticon-bullhorn', title: 'Design', desc: 'Design the Product according to the requirements gathered from you and make it responsive.' },
              { icon: 'flaticon-web-development', title: 'Develop', desc: 'Complete the product from the gathered requirements according to the plan.' },
              { icon: 'flaticon-effective', title: 'Execute', desc: 'Provide solution and execute the solution as a finished product and execute test.' },
              { icon: 'flaticon-consultant', title: 'Deliver', desc: 'After completing the complete product and finally deliver it to you.' },
            ].map(p => (
              <div key={p.title} className="process-card">
                <i className={p.icon}></i>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-block">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Numbers Are Talking</span>
            <h2 style={{ fontSize: '2rem' }}>Let's Check Our Business Growth and Success Story</h2>
            <p className="section-sub" style={{ margin: '1rem auto 0' }}>Trojan X is an upcoming developing company. So far we have completed projects for our beloved customers.</p>
          </div>
          <div className="stats-grid">
            {[
              { icon: 'flaticon-web-development', num: '05', label: 'Delivered Goods' },
              { icon: 'flaticon-consulting-1', num: '02', label: 'IT Consulting' },
              { icon: 'flaticon-startup', num: '07', label: 'Fully Launched' },
              { icon: 'flaticon-tick', num: '10', label: 'Project Completed' },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <i className={s.icon}></i>
                <h3>{s.num}<span>+</span></h3>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-block">
        <div className="container">
          <h2>Let's join with us</h2>
          <p>Keep in touch with us for create project with us and also make it as with your own.</p>
          <Link to="/contact" className="btn">Get in Touch <i className="bx bx-chevron-right"></i></Link>
        </div>
      </section>
    </>
  )
}
