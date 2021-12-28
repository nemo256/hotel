import {
  Center,
  Text,
  Stack,
  Box,
  Heading,
  Badge
} from '@chakra-ui/react'

// Icons
import {
  FaCocktail,
  FaHiking,
  FaSwimmingPool,
  FaCoffee
} from 'react-icons/fa'
import { DiCoda } from 'react-icons/di';


export default function Services() {
  const services = [
    {
      icon: <FaCocktail/>,
      title: 'Cocktail gratuit',
      type: 'in',
      info: 'Un mélange fait par amour de fruits généralement acidulés et sucrés parfois aromatisés avec une liqueur'
    }, 
    {
      icon: <FaHiking/>,
      title: 'Randonnée infini',
      type: 'out',
      info: 'Nous aimons les activités et notre activité c\'est de faire de longues balades à la campagne...'
    },
    {
      icon: <FaSwimmingPool/>,
      title: 'Piscine',
      type: 'in',
      info: 'Nous avons une piscine gratuite pour vous et pour vos enfants avec des mentors expérimentés...'
    },
    {
      icon: <FaCoffee/>,
      title: 'Café',
      type: 'in',
      info: 'Le café le plus puissant de tous les temps, ce café est venu directement du Brésil à notre charmant hôtel...'
    },
    {
      icon: <DiCoda/>,
      title:'Espace vert',
      type: 'out',
      info: 'Nous avons un espace vert, pour que la famille puisse se détendre et passer du bon temps...'
    }
  ]

  return (
    <>
      <Center h={300}  mt={[16, 12, 0]} mb={[16, 12, 0]} mx={2}>
        <Stack spacing={4}>
          <Heading color='primary' size='xl' mb={2} align='center'>
            Services
          </Heading>
          <Text as='i' color='primary' fontSize='2xl' align='center'>
           Comfort, Elegence, Expérience et des émotions...
          </Text>
          <Text 
            px={[0, 4, 8, 20, 40, 60]}
            noOfLines={[8, 4, 3]} 
            align='center'
            ml={[16, 12, 0]}
            mb={'5'}
          >
           Bienvenue à Alger bienvenue à l’hôtel Alger 21.
          Au cœur d’Alger, vivez un séjour incomparable et authentique…
          Moderne, chaleureux et raffiné, l’hôtel El Aurassi est un havre de détente.
          Niché dans les hauteurs algéroises d’où la baie d’Alger s’offre à vous dans un panorama unique et époustouflant, découvrez un large éventail d’activités et vivez une expérience hôtelière totale. 
          </Text>
        </Stack>
      </Center>
      <Center>            
        <Stack 
          direction={['column','row']}
          mx={2}
          mt={[16, 12, 0]}
        >
          {services.map((service) => (
            <Box
              maxW={'sm'}
              borderWidth='0.5px'
              borderRadius='lg' 
              overflow='hidden'
              bgColor='gray.200' 
              _hover={{
                cursor:'pointer'
              }}
            >
              <Center mt={7} mb={2}>   
                <Text fontSize='5xl' color='primary'>
                  {service.icon}
                </Text>
              </Center>
              <Box p='6'>    
                <Center>
                  <Box
                    mb='2'
                    fontWeight='bold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    _hover={{
                      textColor: 'primary',
                      fontWeight: 'extrabold',
                    }}
                  >
                    {service.title}
                  </Box>
                </Center>
                <Box display='flex' mt='2' alignItems='center'>
                  <Box
                    as='h4'
                    mt='2'
                    mb='2'
                    fontWeight='light'
                  >
                    {service.info}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Center>
    </>
  )
}
