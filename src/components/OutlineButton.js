import { Button } from '@chakra-ui/react'


export default function OutlineButton({ children, ...props }) {
  return (
    <Button
      as='a'
      bg='none'
      border='1px'
      borderRadius={0}
      fontWeight='bold'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      px={props.px ? props.px : null}
      py={props.py ? props.py : null}
      mx={props.mx ? props.mx : null}
      color={props.color ? props.color : null}
      position={props.position ? props.position : null}
      zIndex={props.zIndex ? props.zIndex : null}
      opacity={props.opacity ? props.opacity : null}
      display={props.display ? props.display : 'flex'}
      rightIcon={props.rightIcon ? props.rightIcon : null}
      onClick={props.onClick ? props.onClick : null}
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
