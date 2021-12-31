import { Container } from '@chakra-ui/react'
import Element from '../components/contacter-nous/Element'
import Head from '../components/contacter-nous/Head'

export default function Index() {
  return (
    <Container
      mt={16}
      maxW='100%'
      justify='center'
      align='center'
    >
      <Head />
      <Element />
    </Container>
  )
}
