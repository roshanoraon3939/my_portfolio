import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Fireflies from "./components/fireflies/Fireflies";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education/>
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Fireflies />
    </>
  )
}

export default App
