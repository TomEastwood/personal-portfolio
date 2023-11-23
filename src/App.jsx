import './App.css'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import waves from './assets/waves.svg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  

  return (
    <div className = "container">
      <Parallax pages={4}>
        
        <ParallaxLayer className='header' offset={0} speed={0} factor={3}>
          <div className='bg-1'></div>
        <ParallaxLayer className='text' offset={0.3} speed={1} factor={1}>
          <Header />
        </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer className='about' offset={0.99} speed={1} factor={0}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer className='about-bg' offset={1.6} speed={0.1} factor={1}>
        </ParallaxLayer>
        <ParallaxLayer className="waves-1" offset={1.4} speed={0.1} factor={1}>
          <img src={waves} alt="waves" />
        </ParallaxLayer>
        

        <ParallaxLayer className='skills' offset={1.99} speed={0.7} factor={0}>
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer className="projects-bg" offset={2.5} speed={0.1} factor={1}>
          <Projects />
        </ParallaxLayer>


      </Parallax>
    </div>
  )
}

export default App
