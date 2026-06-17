import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const posts = [
    { title: 'Overview about Web Development', date: '05 Dec 2023', img: '/images/services/web.jpg', desc: 'Web development encompasses building websites and web applications. Learn about the technologies and frameworks we use.' },
    { title: 'Understanding Software Development', date: '12 Dec 2023', img: '/images/services/services-img5.jpg', desc: 'Software development lifecycle, methodologies, and best practices for building robust applications.' },
    { title: 'Digital Marketing Strategies', date: '18 Dec 2023', img: '/images/services/services-img6.jpg', desc: 'Effective digital marketing strategies to grow your online presence and reach your target audience.' },
  ]

  return (
    <>
      <style>{`
        .page-banner { padding: 10rem 0 4rem; background: var(--bg-2); text-align: center; position: relative; }
        .page-banner h3 { font-family: var(--font-display); font-size: 3rem; letter-spacing: 0.05em; color: var(--text); }
        .page-banner ul { display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem; font-family: var(--font-ui); font-size: 0.85rem; color: var(--text-2); }
        .page-banner ul a { color: var(--red); }
        .blog-page { padding: 5rem 0; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .blog-card { background: var(--card-bg); border: 1.5px solid var(--border-2); border-radius: 8px; overflow: hidden; transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 8px var(--shadow); }
        .blog-card:hover { border-color: var(--red); transform: translateY(-4px); box-shadow: 0 12px 32px var(--shadow-lg); }
        .blog-card img { width: 100%; height: 220px; object-fit: cover; }
        .blog-card .content { padding: 1.5rem; }
        .blog-card .content .date { font-family: var(--font-ui); font-size: 0.7rem; letter-spacing: 0.1em; color: var(--text-2); margin-bottom: 0.5rem; }
        .blog-card .content h3 { font-family: var(--font-ui); font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.75rem; }
        .blog-card .content p { font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
        @media(max-width:768px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <h3>Our Blog</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><i className="bx bx-chevrons-right"></i></li>
            <li>Blog</li>
          </ul>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Latest Blog Posts</h2>
            <p className="section-sub" style={{ margin: '0.5rem auto 0' }}>Insights, tutorials, and updates from the Trojan X team.</p>
          </div>
          <div className="blog-grid">
            {posts.map(p => (
              <div key={p.title} className="blog-card">
                <img src={p.img} alt={p.title} />
                <div className="content">
                  <div className="date">{p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
