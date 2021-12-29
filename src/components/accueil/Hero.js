import {
  Flex,
  Spacer,
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// React-slick for adding a carousel
import Slider from 'react-slick'

// React-reveal for text zoom animation
import Zoom from 'react-reveal/Zoom'

// Carousel settings
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
}


export default function Hero() {
  const [slider, setSlider] = useState(null)

  const cards = [
    {
      title: 'Hotel 21 Alger',
      text: 'En toute sécurité',
      image: './room-1.jpeg',
    },
    {
      title: 'Hotel 21 Alger',
      text: 'En toute sécurité',
      image: './room-2.jpeg',
    },
    {
      title: 'Hotel 21 Alger',
      text: 'En toute sécurité',
      image: './room-3.jpeg',
    },
  ]

  return (
    <Box
      position='relative'
      height={[400, 500]}
      width='full'
      overflow='hidden'
      mt={[-65, -65, -65]}
      mb={[16, -65, 0]}
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='./css/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='./css/slick-theme.min.css'
      />
      <Flex>
        <IconButton
          aria-label='left-arrow'
          position='relative'
          color='white'
          top={[320, 250]}
          px={[4, 6, 6, 6, 6, 6]}
          py={[2, 4, 4, 4, 4, 4]}
          mx={2}
          zIndex={2}
          opacity={0.7}
          border='2px'
          borderRadius='none'
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
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size='40px' />
        </IconButton>
        <Spacer />
        <IconButton
          aria-label='right-arrow'
          position='relative'
          color='white'
          top={[320, 250]}
          px={[4, 6, 6, 6, 6, 6]}
          py={[2, 4, 4, 4, 4, 4]}
          mx={2}
          zIndex={2}
          opacity={0.7}
          border='2px'
          borderRadius='none'
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
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size='40px' />
        </IconButton>
      </Flex>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={[400, 500]}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${card.image})`}
          >
            <Stack
              spacing={6}
              w='full'
              maxW='full'
              position='relative'
              top='45%'
              transform='translate(0, -50%)'
            >
              <Zoom cascade>
                <Stack 
                  align='center'
                >
                  <Heading 
                    as='i' 
                    color='white'
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    as='i'
                    color='white'
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
                  >
                    {card.text}
                  </Text>
                </Stack>
              </Zoom>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

