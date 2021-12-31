import { Container } from '@chakra-ui/react'
import Card from '../components/contacter-nous/Card'

export default function Index() {
  return (
    <Container
      mt={16}
      maxW='1200px'
      justify='center'
      align='center'
    >
      <Card />
    </Container>
  )
}
