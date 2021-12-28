import { Button } from '@chakra-ui/react'


export default function OutlineButton({ children, ...pageProps }) {
  return (
    <Button
      as='a'
      bg='none'
      border='2px'
      borderRadius={0}
      fontWeight='bold'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      display={pageProps.display ? pageProps.display : 'flex'}
      rightIcon={pageProps.rightIcon ? pageProps.rightIcon : 'none'}
      _hover={{
        bg: 'primary',
        textColor: 'black',
        fontWeight: 'extrabold'
      }}
      _active={{
        bg: 'primary',
        transform: 'scale(0.98)',
      }}
      _focus={{  }}
    >
      {children}
    </Button>
  )
}
