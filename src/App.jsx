import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Vission from "./components/Vission"
import Services from "./components/Services"
import Upcoming from "./components/Upcoming"
import Complete from "./components/Complete"
import Whychoose from "./components/Whychoose"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><Vission /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Upcoming /><Complete /></div>
      <div id="insights"><Whychoose /><Testimonials /></div>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
