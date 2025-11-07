import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './pages/Navbar'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className='w-full bg-[#1E1E1D] min-h-screen mx-auto text-white'>
      <div className='flex flex-col gap-1 md:gap-[6vh] w-full max-w-[1400px] mx-auto min-h-screen'>
        <Navbar />
        <section id='hero'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Project />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <section id='footer'>
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default App