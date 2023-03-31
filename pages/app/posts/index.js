import React from 'react'
import PostsAll from '../../../components/app/posts/all';

export default function index({posts}) {
  return (
    <div>
        <PostsAll/>
    </div>
  )
}

export async function getServerSideProps (ctx) {
    const userSession = await getSession(ctx.req, ctx.res)
    const client = await clientPromise;
    const db = await client.db("brack");
    const user = await db.collection("user").findOne({
        auth0Id: userSession.user.sub
    })
    if(!user){
        return {
           tokens:0,
           posts:[]
        }
    }
    const posts = await db.collection("posts").find({
        userId: user._id
    }).toArray()
    // return {
    //     tokens: user.tokens,
    //     posts: posts.map(({createdAt,_id,userId,...rest}) => ({
    //         _id: _id.toString(),
    //         createdAt: createdAt.toString(),
    //         ...rest,
    //     }))
    // }
  return {
    props: {
        tokens: user.tokens,
        posts: posts.map(({createdAt,_id,userId,...rest}) => ({
            _id: _id.toString(),
            createdAt: createdAt.toString(),
            ...rest,
        }))
    }
  }
}