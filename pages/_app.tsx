import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}


export default MyApp
