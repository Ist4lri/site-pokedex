import 'styles/globals.css'
import type { AppProps } from 'next/app'
import TitleLogo from 'components/titleLogo'
import Prensentation from 'components/presentation'
import Request from 'components/request'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <TitleLogo />
      <Prensentation />
      <nav><Request /></nav>
    </html>

  )
}

export default MyApp

//<Component {...pageProps} />