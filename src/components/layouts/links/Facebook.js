import { FaFacebook } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'


export default function Facebook() {
  return (
    <Link href='https://facebook.com/hotel21/' passHref>
      <IconButton
        aria-label='Facebook Icon'
        variant='icon'
        color='primary'
        isRound
        icon={ <FaFacebook size='30' p='8'/> }
        _hover={{
          transform: 'scale(1.11)',
          transition: 'all .3s ease'
        }}
        _focus={{  }}
      />
    </Link>
  )
}
