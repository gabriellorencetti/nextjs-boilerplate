import type { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "styles/global"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="shortcut icon"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <meta
          name="theme-color"
          content="#fff"
        />
        <meta
          name="description"
          content="A simple project starter to work with Next.js"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
