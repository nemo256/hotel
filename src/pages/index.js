import { Container } from '@chakra-ui/react'
import Hero from '../components/accueil/Hero'
import Services from '../components/accueil/Services'

export default function Index() {
  return (
    <>
      <Container
        bg='tomato'
        mt={16}
        maxW='100%'
        justify='center'
        align='center'
      >
        <Hero />
      </Container>
      <Container
        bg='teal'
        maxW='100%'
        justify='center'
        align='center'
      >
        <Services />
      </Container>
    </>
  )
}
