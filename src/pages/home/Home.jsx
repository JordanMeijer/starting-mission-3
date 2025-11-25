import React from 'react'
import HomeHero from './components/HomeHero'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

export default function Home() {
  return (
    <div>
        Home
        <Navbar/>
        <HomeHero/>
        <Footer/>
    </div>
  )
}
