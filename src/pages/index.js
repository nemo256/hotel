import { Stack, Box } from '@chakra-ui/react'
import Hero from '../components/accueil/Hero'
import Services from '../components/accueil/Services'
import Stats from '../components/accueil/Stats'
import Testimonials from '../components/accueil/Testimonials'

export default function Index() {
  return (
    <Stack
      mt={90}
      maxW='100%'
      justify='center'
      align='center'
    >
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
    </Stack>
  )
}
