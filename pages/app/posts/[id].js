import React from 'react'
import SinglePost from '../../../components/app/posts/single';

export default function single() {
  return (
    <div>
        <SinglePost prompt={prompt} userSession={userSession} subscription={subscription}/>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context) {
        const userSession = await getSession(context.req, context.res)
        const client = await clientPromise;
        const db = await client.db("brack")
        const user = await db.collection("user").findOne({auth0Id: userSession.user.sub})
        const post = await db.collection("posts").findOne({_id: new ObjectId(context.params.id)})
        if(!post){
            return {
                redirect: {
                    destination: "/post/new",
                    permanent: false
                }
            }
        }
        return {
            props: {
                title: post.title,
                content: post.content,
                user: user.tokens,
                subscription: user.subscription,
                userSession:userSession.user,
            }
        }
    }
})
