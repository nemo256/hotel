// Custom font
import '@fontsource/open-sans/500.css'

import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'

import theme from '../theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout> 
          <Component {...pageProps} />
        </Layout> 
      </ColorModeProvider>
    </ChakraProvider>
  )
}
