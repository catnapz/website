import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="./favicon.ico" />
        </Head>
        <body className='bg-transparent'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument