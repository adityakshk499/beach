import React from 'react'
import About from './Components/About'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Forms from './Components/Forms'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Forms/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App