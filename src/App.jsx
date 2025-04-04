import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      {/* About Section */}
      {/* Education Section */}
      {/* What if I combine the education section and the projects section to be in the same 
          section and I had education on the right in a mini timeline, and have projects on
          the right */}
      <About />
      <Projects />
      
      <Contact />
      <Footer />
      {/* Contact card */}
    </>
  )
}

export default App
