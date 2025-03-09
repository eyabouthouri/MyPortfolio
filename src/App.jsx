import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Experiences from "./Components/Experiences/Experiences"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Experiences/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App