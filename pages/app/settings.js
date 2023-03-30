import Link from 'next/link'
import React from 'react'
import Settings from '../../components/app/settings/index'
import { getSession } from '@auth0/nextjs-auth0'

export default function settings({user}) {
  return (
    <div>
      {/* <Link href={'https://billing.stripe.com/p/login/test_aEU14EdDj7qd1Y4cMM'}>
        Stripe Dashboard
      </Link> */}
      <Settings user={user}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res)
  const { user } = session
 
  return {
    props: {
      user
    },
  }
}