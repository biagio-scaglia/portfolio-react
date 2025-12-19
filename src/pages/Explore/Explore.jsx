import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GooeyNav from '../../components/GooeyNav'

function Explore() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('about')

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div style={{ padding: '2rem', background: '#000', color: 'white', minHeight: '100vh' }}>
        <button onClick={() => navigate('/')} style={{ marginBottom: '2rem', padding: '0.5rem 1rem', background: 'transparent', color: 'white', border: '1px solid white', cursor: 'pointer' }}>
          ← Home
        </button>
        
        <GooeyNav items={navItems} onItemClick={handleNavClick} />

        <section id="about" style={{ marginTop: '4rem', padding: '2rem' }}>
          <h2>About Me</h2>
          <p>Web Developer e UX/UI Designer con passione per creare esperienze digitali innovative e user-friendly.</p>
        </section>

        <section id="projects" style={{ marginTop: '4rem', padding: '2rem' }}>
          <h2>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}>
              <h3>Project 1</h3>
              <p>Descrizione progetto</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}>
              <h3>Project 2</h3>
              <p>Descrizione progetto</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}>
              <h3>Project 3</h3>
              <p>Descrizione progetto</p>
            </div>
          </div>
        </section>

        <section id="skills" style={{ marginTop: '4rem', padding: '2rem' }}>
          <h2>Skills</h2>
          <div style={{ marginTop: '2rem' }}>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
            <h3>Design</h3>
            <p>Figma, UX/UI Design, Prototyping</p>
          </div>
        </section>

        <section id="contact" style={{ marginTop: '4rem', padding: '2rem' }}>
          <h2>Contact</h2>
          <p>Email: biagio.scaglia@example.com</p>
          <p>LinkedIn: /in/biagio-scaglia</p>
        </section>
      </div>
    </div>
  )
}

export default Explore

