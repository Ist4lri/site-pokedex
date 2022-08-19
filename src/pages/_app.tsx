import 'styles/globals.css'
import type { AppProps } from 'next/app'
import TitleLogo from 'components/title'
import Prensentation from 'components/presentation'
import Request from 'components/request'
import Answer from 'components/answer'


function MyApp({ Component, pageProps}: AppProps) {
  return (
    <html>
      <TitleLogo />
      <Prensentation />
      <nav><Request /></nav>
      <section><Answer /></section>
    </html>

  )
}

export default MyApp

//<Component {...pageProps} />