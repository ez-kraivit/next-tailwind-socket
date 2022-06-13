import '../styles/globals.css'

import Layout from '../components/layout'
import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}