import React from 'react'
import Navbar from './components/Navbar'
import SlidingHero from './components/Hero'
import Hero from './components/Hero2'
import Navbar2 from './components/Navbar2'
import Card from './components/Card'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <Card title="Card Title" description="This is a card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <SlidingHero/>
      <Hero/>
      <Footer/>
      <Footer2/>
    </div>
  )
}

export default App