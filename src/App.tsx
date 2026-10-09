import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Writeups from './components/Writeups'
import Footer from './components/Footer'
import { MotionConfig } from 'motion/react'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-[#050505] text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Credentials />
        <Writeups />
        <Footer />
      </main>
    </MotionConfig>
  )
}

export default App
