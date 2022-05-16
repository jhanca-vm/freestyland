import type { AppProps } from 'next/app'
import Header from 'components/Header'
import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </>
)

export default App
