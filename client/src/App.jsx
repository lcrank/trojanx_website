import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CareerGuidance from './components/CareerGuidance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <CareerGuidance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
