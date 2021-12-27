import { Container,Stack } from '@chakra-ui/react'
import Hero from '../components/accueil/Hero'
import Services from '../components/accueil/Services'

export default function Index() {
  return (
    <>
      <Stack
        bg='tomato'
        mt={16}
        maxW='100%'
        h={100}
        justify='center'
        align='center'
      >
        <Hero />
      </Stack>
      <Stack
        bg='teal'
        maxW='100%'
        justify='center'
        align='center'
        
      >
        <Services />
      </Stack>
    </>
  )
}
