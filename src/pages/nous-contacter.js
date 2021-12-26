import { Container } from '@chakra-ui/react'
import Element from '../components/nous-contacter/Element'

export default function Index() {
  return (
    <>
      <Container
        bg='coral'
        mt={16}
        maxW='100%'
        justify='center'
        align='center'
      >
        <Element />
      </Container>
    </>
  )
}
