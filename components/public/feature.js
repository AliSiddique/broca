import React from 'react'
import First from './Features.js/First'
import Second from './Features.js/Second'
import Third from './Features.js/Third'
import Navbar from '../constants/Navbar'
import Footer from '../constants/Footer'

export default function FeaturePage() {
  return (
    <div>
        <Navbar/>
        <First/>
        <Second/>
        <Third/>
        <Footer/>
    </div>
  )
}
