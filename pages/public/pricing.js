import React from 'react'
import Footer from '../../components/constants/Footer'
import Navbar from '../../components/constants/Navbar'
import Pricing from '../../components/public/Pricing'
import CTA from '../../components/public/Home/CTA'
import { getSession } from '@auth0/nextjs-auth0'

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
// export const getServersideProps = async (context) => {
//   const {user } =getSession(context.req, context.res)
//   let allowed;
//   if(!user){
//     allowed = false
//   }else{
//     allowed = true
//   }
//   const data = await res.json()
//   return {
//     props: {  }
//   }
// }