import Link from 'next/link'
import React from 'react'
import Settings from '../../components/app/settings/index'

export default function settings() {
  return (
    <div>
      {/* <Link href={'https://billing.stripe.com/p/login/test_aEU14EdDj7qd1Y4cMM'}>
        Stripe Dashboard
      </Link> */}
      <Settings/>
    </div>
  )
}
