import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0/client'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
      <link rel="shortcut icon" href="/logo.png" />
    </Head>
      <Toaster position='top-right'/>
    <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
