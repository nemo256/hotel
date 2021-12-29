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
      px={pageProps.px ? pageProps.px : null}
      py={pageProps.py ? pageProps.py : null}
      mx={pageProps.mx ? pageProps.mx : null}
      color={pageProps.color ? pageProps.color : null}
      position={pageProps.position ? pageProps.position : null}
      zIndex={pageProps.zIndex ? pageProps.zIndex : null}
      opacity={pageProps.opacity ? pageProps.opacity : null}
      display={pageProps.display ? pageProps.display : 'flex'}
      rightIcon={pageProps.rightIcon ? pageProps.rightIcon : null}
      onClick={pageProps.onClick ? pageProps.onClick : null}
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
