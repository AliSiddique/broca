import React from 'react'
import Footer from '../../components/constants/Footer'
import Navbar from '../../components/constants/Navbar'
import Pricing from '../../components/public/Pricing'
import CTA from '../../components/public/Home/CTA'

export default function pricing() {
  return (
    <div>
      <Navbar/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </div>
  )
}
