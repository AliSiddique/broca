import Navbar from '../components/constants/Navbar'
import Footer from '../components/constants/Footer'
import Hero from '../components/public/Home/Hero'
import Features from '../components/public/Home/Features'
import CTA from '../components/public/Home/CTA'
import Product from '../components/public/Home/Product'
import Newsletter from '../components/public/Home/Newsletter'



export default function Example() {

  return (
    <div className="">
      {/* Header */}
    <Navbar/>
      <Hero/>
       <Features/>
       <Newsletter/>
       <Product/>
        <CTA/>
      {/* Footer */}
     <Footer/>
    </div>
  )
}
