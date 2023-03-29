import React from 'react'
import Layout from '../../components/layout/Layout'
import { getSession } from '@auth0/nextjs-auth0'

export default function all({user}) {

    
  return (
    <div>
      <Layout user={user}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const {user} = await getSession(context.req, context.res);

  

  return {
    props: { user },
  };
}