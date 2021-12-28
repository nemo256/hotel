import { Container } from '@chakra-ui/react'
import Element from '../components/nous-contacter/Element'
import Head from '../components/nous-contacter/Head'

export default function Index() {
  return (
    <>
      <Container
        mt={16}
        maxW='100%'
        justify='center'
        align='center'
      >
        <Head />
        <Element />
      </Container>
    </>
  )
}
