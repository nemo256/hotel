import { Container } from '@chakra-ui/react'
import Header from '../components/chambres/Header'

export default function Chambres() {
  return (
    <>
      <Container
        bg='none'
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
