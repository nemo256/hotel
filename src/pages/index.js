import { Stack,Box } from '@chakra-ui/react'
import Hero from '../components/accueil/Hero'
import Services from '../components/accueil/Services'

export default function Index() {
  return (
    <>
      <Stack
        mt='90'
        maxW='100%'
        direction='column'
        zIndex={1}
      >
        <Hero />
        <Services />
      </Stack>
    </>
  )
}
