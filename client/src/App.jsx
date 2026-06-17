import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CareerGuidance from './components/CareerGuidance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SoftwarePage from './pages/SoftwarePage'
import HardwarePage from './pages/HardwarePage'
import BlogPage from './pages/BlogPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <CareerGuidance />
      <Contact />
    </main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/software" element={<SoftwarePage />} />
        <Route path="/services/hardware" element={<HardwarePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
