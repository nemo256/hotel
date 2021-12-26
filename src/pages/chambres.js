import { Container } from '@chakra-ui/react'
import Header from '../components/chambres/Header'

export default function Index() {
  return (
    <>
      <Container
        bg='magenta'
        mt={16}
        maxW='100%'
        justify='center'
        align='center'
      >
        <Header />
      </Container>
    </>
  )
}
