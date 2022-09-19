import '@fontsource/saira/400.css'

import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import '../styles/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
