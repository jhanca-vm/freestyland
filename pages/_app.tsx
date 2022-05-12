import type { AppProps } from 'next/app'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <main>
      <Sidebar />
      <Component {...pageProps} />
    </main>
  </>
)

export default App
