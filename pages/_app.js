import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className=' '>
      <Toaster position='top-right'/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
