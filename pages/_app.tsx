import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from 'components/Header'
import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <meta property="og:url" content={`https://freestyland.site${asPath}`} />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
