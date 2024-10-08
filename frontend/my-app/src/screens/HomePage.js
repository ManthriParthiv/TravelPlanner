import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations'
const HomePage = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <FeaturedDestinations />
    </div>
  )
}

export default HomePage
