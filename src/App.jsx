import { useEffect } from "react"
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Experiences from "./Components/Experiences/Experiences"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Education from "./Components/Education/Education"
import Atmosphere from "./Components/Atmosphere/Atmosphere"
import { AppProvider } from "./context/AppContext"

const Spotlight = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined

    let frame = 0
    const move = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${event.clientX}px`)
        document.documentElement.style.setProperty("--my", `${event.clientY}px`)
      })
    }

    window.addEventListener("mousemove", move, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return null
}

const App = () => {
  return (
    <AppProvider>
      <Spotlight />
      <Atmosphere />
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Experiences/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </AppProvider>
  )
}

export default App
