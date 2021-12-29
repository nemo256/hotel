import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black'
      },
    },
  },
  colors: {
    primary: '#b29700',
    secondary: '#EEEEEE',
  }
})

export default theme
