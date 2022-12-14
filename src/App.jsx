import NavBar from './Components/NavBar'
import './App.css'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {

  return (
    <main className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
