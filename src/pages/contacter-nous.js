import { Container } from '@chakra-ui/react'
import Card from '../components/contacter-nous/Card'

export default function Index() {
  return (
    <Container
      mt={16}
      maxW='100%'
      justify='center'
      align='center'
    >
      <Card />
    </Container>
  )
}
