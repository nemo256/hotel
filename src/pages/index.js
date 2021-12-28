import {Flex,Stack ,Box} from '@chakra-ui/react'
import Hero from '../components/accueil/Hero'
import Services from '../components/accueil/Services'

export default function Index() {
  return (
    <>
      <Stack
        mt={16}
        maxW='100%'
        direction='column'
        zIndex={1}
        bg='#priamry'
      >
        <Box flex='1' width="100%" >
        <Hero />
        </Box>
        <Box flex='1'  width="100%"  >
        <Services />
        </Box>
     
      </Stack>
    </>
  )
}
