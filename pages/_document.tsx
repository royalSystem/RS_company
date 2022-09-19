import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, theme } from '@chakra-ui/react'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap' rel='stylesheet'/>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
