import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
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
    secondary: '#3874cc',
    accent: '#7d4ba6'
  }
})

export default theme
