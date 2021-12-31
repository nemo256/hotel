import {
  Container,
  Center,
  Text,
  Stack,
  Divider,
  Link
} from '@chakra-ui/react'

// Social links
import Facebook from './links/Facebook'
import Twitter from './links/Twitter'
import Instagram from './links/Instagram'

export default function Footer() {
  return (
    <Container
      bottom={0}
      left={0}
      as='footer'
      align='center'
      maxW='100%'
      mt={16}
      py={1}
      px={2}
    >
      <Divider mb={2}/>
      <Stack spacing={[2, 4]} align='center'>
        <Stack spacing={[0, 6]} direction={['column', 'row']}>
          <Center>
            <Text>
              Vous pouvez nous trouver à #Hotel21
            </Text>
          </Center>
          <Stack
            align='center'
            justify='center'
            direction='row'
            spacing={1}
          >
            <Facebook />
            <Instagram />
            <Twitter />
          </Stack>
        </Stack>
        <Text pb={4} pt={2} textAlign='center'>
          MIT License © 2021-Present
          <Link 
            as='a'
            href='/'
            outline='none'
            color='primary'
            fontWeight='bold'
            px={2}
          >
            Hotel 21
          </Link>
          Version 0.0.2
        </Text>
      </Stack>
    </Container>
  )
}
