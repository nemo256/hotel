import {
  Flex,
  Center,
  Text,
  Box,
  Button,
  Image,
  Spacer
} from '@chakra-ui/react'

// Reveal animation on room pictures
import Fade from 'react-reveal/Bounce';

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
        mt={[16, 12, 0]}
        mb={[8, 10, 12]}
        direction='column'
      >
        <Fade bottom>
          <Image
            src='./brownRoom.jpg' alt='Brown Room'
            mt={[12, 10, 8]}
            mb={[8, 12, 16]}
          />
        </Fade>
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
      <Flex direction='column'>
        {rooms.map((room) => (
          <Flex 
            direction={['column', 'row']}
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
                  <Image zIndex={0} src={room.src} />
                </Fade>
              }
            </Center>
          </Flex>
        ))}
      </Flex>
    </>
  )
}