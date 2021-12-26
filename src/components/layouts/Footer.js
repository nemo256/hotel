import {
  Container,
  Text,
  Link,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container
      bottom={0}
      left={0}
      as='footer'
      align='center'
      maxW='100%'
      py={2}
      px={2}
    >
      <Text
        py={4}
        textAlign='center'
      >
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
        Version 0.0.1
      </Text>
    </Container>
  )
}
