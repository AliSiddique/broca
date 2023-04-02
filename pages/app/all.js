import React from 'react'
import Layout from '../../components/layout/Layout'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import clientPromise  from '../../lib/mongodb'

export default function all({user}) {

    
  return (
    <div>
      <Layout user={user}/>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired(async (context) => {
  const { req, res } = context;
  const {user} = await getSession(context.req, context.res);

  const client = await clientPromise;
  const db = await client.db("brack")
  const userProfile = await db.collection("user").findOne({auth0Id: user.sub})
  if(!userProfile.tokens){
    
  }
  const allowed = userProfile.tokens
  if(!allowed){
    res.status(403).json({message: "Not authorized"})
  }

  return {
    props: { user },
  };
}
)