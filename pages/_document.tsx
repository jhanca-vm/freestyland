import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  imageBaseUrl =
    'https://usfwrmppxlzaytcmtule.supabase.co/storage/v1/object/public/images'

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${this.imageBaseUrl}/banner.jpg`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
