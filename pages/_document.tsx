import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const fontUrl = (...args: string[]) => {
    const families = args.map(family => `family=${family}&`)

    return `https://fonts.googleapis.com/css2?${families}display=block`
  }

  return (
    <Html lang="es">
      <Head>
        <link
          href={fontUrl('Caveat:wght@400;700', 'Karla:wght@400;700')}
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
