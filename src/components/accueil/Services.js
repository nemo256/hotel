import {
  Center,
  Text,
  Stack,
  Box,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'

// Icons
import { FaCocktail,
  FaHiking,
  FaSwimmingPool,
  FaCoffee 
} from 'react-icons/fa'
import { GiHorseHead } from 'react-icons/gi'
import { DiCoda } from 'react-icons/di'

// Custom Header component
import Header from '../../components/Header'


export default function Services() {
  // Services data
  const services = [
    {
      index: 1,
      icon: <FaCocktail/>,
      title: 'Cocktail gratuit',
      info: 'Un mélange fait par amour de fruits généralement acidulés et sucrés parfois aromatisés avec une liqueur'
    }, 
    {
      index: 2,
      icon: <FaHiking/>,
      title: 'Randonnée infini',
      type: 'out',
      info: 'Nous aimons les activités et notre activité c\'est de faire de longues balades à la campagne juste pour vous'
    },
    {   
      index: 3,
      icon: <FaSwimmingPool/>,
      title: 'Piscine',
      type: 'in',
      info: 'Trois piscines gratuite pour vous et pour vos enfants pour passer un bon temp des mentors expérimentés...'
    },
    {
      index: 4,
      icon: <FaCoffee/>,
      title: 'Café',
      type: 'in',
      info: 'Le café le plus puissant , ce café est venu directement du Brésil à notre charmant hôtel...'
    },
    {
      index: 5,
      icon: <DiCoda/>,
      title: 'Espace vert',
      type: 'out',
      info: 'Un espace vert avec une belle vue pour que la famille puisse se détendre et passer du bon temps'
    },
    {
      index: 6,
      icon: <GiHorseHead/>,
      title: 'Équitation',
      type: 'out',
      info: 'Profitez de beaux sentiers et de l\'équitation. Choisissez parmi des promenades relaxantes uniquement'
    }
  ]

  return (
    <>
      <Header
        h={[420, 400, 300, 300, 280, 260]}
        py={[2, 4, 8, 10]}
      >
        {{
           title: 'Services',
           heading: 'Comfort, Elegence, Expérience et des émotions...',
           content: 'Bienvenue à Alger bienvenue à l’hôtel 21 au cœur d’Alger, vivez un séjour incomparable et authentique, Moderne, chaleureux et raffiné. l’hôtel 21 est un havre de détente. Découvrez un large éventail d’activités et vivez une expérience hôtelière totale.'
        }}
      </Header>
      <Center>           
        <Grid
          mr={10} 
          ml={10}
          mt={[16, 12, 0]} 
          templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(6, 1fr)']}
          gap={5}
        >
        {services.map((service, index) => (
          <GridItem key={index} colSpan={2} h='100%'>
            <Box
              maxW='sm'
              overflow='hidden'
              borderRadius='none' 
              bgColor='secondary' 
            >
              <Center mt={7} mb={2}>   
                <Text fontSize='5xl' color='primary'>
                  {service.icon}
                </Text>
              </Center>
              <Box p={6}>
                <Center>
                  <Box
                    as='h4'
                    mb={2}
                    fontWeight='bold'
                    lineHeight='tight'
                    isTruncated
                    _hover={{
                      textColor: 'primary',
                      fontWeight: 'extrabold'
                    }}
                  >
                  {service.title}
                  </Box>
                </Center>
                <Box display='flex' mt={2} alignItems='center'>
                  <Box
                    as='h4'
                    mt={2}
                    mb={2}
                    fontWeight='light'
                    textColor='gray.600'
                  >
                  {service.info}
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))} 
        </Grid>
      </Center>
    </>
  )
}
