import {
  Flex,
  Center,
  Text,
  Button,
  Image,
  Spacer
} from '@chakra-ui/react'

// Reveal animation on room pictures
import Fade from 'react-reveal/Bounce';

// Parallax effect
import { Parallax } from 'react-parallax'

// Rooms data
const rooms = [
  {
    id: 1,
    title: 'Single',
    src: './room-1.jpeg',
    description: 'Basic one bedroom and one bathroom',
    link: ''
  },
  {
    id: 2,
    title: 'Double',
    src: './room-4.jpeg',
    description: 'Basic two bedrooms and one bathroom',
    link: ''
  },
  {
    id: 3,
    title: 'Triple',
    src: './room-8.jpeg',
    description: 'VIP two bedrooms and two bathrooms',
    link: ''
  },
]


export default function Main() {
  return (
    <>
      <Flex 
        mt={[16, 12, 10, 8, 6]}
        mb={[6, 8, 10, 12, 16]}
        direction='column'
        zIndex={1}
      >
        <Center
          mt={[12, 10, 8]}
          mb={[8, 12, 16]}
        >
          <Fade bottom>
            <Parallax
              bgImage='./brownRoom.jpg'
              bgImageAlt='Brown Room'
              strength={600}
            >
              <Center 
                px={[10, 220, 340, 400, 500, 605]}
                py={[10, 160, 200, 260, 280, 280]}
                h={[260, 340, 480, 550, 600, 600]}
                opacity={0.7}
              >
                <Text 
                  as='i'
                  bg='gray.300'
                  color='primary'
                  fontSize='xl'
                  align='center'
                  px={[8, 10, 12, 16, 20]}
                  py={[6, 8, 10, 12, 16]}
                >
                  Bienvenue dans nos chambres
                </Text>
              </Center>
            </Parallax>
          </Fade>
        </Center>
        <Text 
          as='i'
          noOfLines={2} 
          color='primary'
          fontSize='2xl'
          align='center'
          mb={[8, 12, 16]}
        >
          Séjour dans une chambre à Alger signé Hotel 21
        </Text>
      </Flex>
      <Flex direction='column' bg='gray.100'>
        {rooms.map((room) => (
          <>
          <Flex 
            direction='row'
            display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          >
            <Center w='100%'>
              {room.id % 2 == 0 ? 
                <Fade right>
                  <Flex direction='column'>
                    <Text color='primary' fontSize='xl' align='center'>
                      {room.title}
                    </Text>
                    <Text align='center'>
                      {room.description}
                    </Text>
                    <Button
                      as='a'
                      mt={4}
                      bg='none'
                      border='2px'
                      borderRadius={0}
                      fontWeight='bold'
                      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                      _hover={{
                        bg: 'primary',
                        textColor: 'black',
                        fontWeight: 'extrabold'
                      }}
                      _active={{
                        bg: 'primary',
                        transform: 'scale(0.98)',
                      }}
                      _focus={{  }}
                    >
                      Découvrir chambre {room.title}
                    </Button>
                  </Flex>
                </Fade>
                  :
                <Fade left>
                  <Image src={room.src} />
                </Fade>
              }
            </Center>
            <Center w='100%'>
              {room.id % 2 != 0 ? 
                <Fade left>
                  <Flex direction='column'>
                    <Text color='primary' fontSize='xl' align='center'>
                      {room.title}
                    </Text>
                    <Text align='center'>
                      {room.description}
                    </Text>
                    <Button
                      as='a'
                      mt={4}
                      bg='none'
                      border='2px'
                      borderRadius={0}
                      fontWeight='bold'
                      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                      _hover={{
                        bg: 'primary',
                        textColor: 'black',
                        fontWeight: 'extrabold'
                      }}
                      _active={{
                        bg: 'primary',
                        transform: 'scale(0.98)',
                      }}
                      _focus={{  }}
                    >
                      Découvrir chambre {room.title}
                    </Button>
                  </Flex>
                </Fade>
                  :
                <Fade left>
                  <Image src={room.src} />
                </Fade>
              }
            </Center>
          </Flex>
          <Flex
            direction='column-reverse'
            display={['flex', 'flex', 'none', 'none', 'none', 'none']}
          >
            <Fade left>
              <Flex direction='column' my={16}>
                <Text color='primary' fontSize='xl' align='center'>
                  {room.title}
                </Text>
                <Text align='center'>
                  {room.description}
                </Text>
                <Button
                  as='a'
                  mt={4}
                  mx={12}
                  bg='none'
                  border='2px'
                  borderRadius={0}
                  fontWeight='bold'
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  _hover={{
                    bg: 'primary',
                    textColor: 'black',
                    fontWeight: 'extrabold'
                  }}
                  _active={{
                    bg: 'primary',
                    transform: 'scale(0.98)',
                  }}
                  _focus={{  }}
                >
                  Découvrir chambre {room.title}
                </Button>
              </Flex>
            </Fade>
            <Fade right>
              <Image src={room.src} />
            </Fade>
          </Flex>
          </>
        ))}
      </Flex>
    </>
  )
}
