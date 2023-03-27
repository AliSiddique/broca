import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className=' '>
      <Head>
      <link rel="shortcut icon" href="/logo.png" />
    </Head>
      <Toaster position='top-right'/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
