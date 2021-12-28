import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Hero() {
  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

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
      height='600px'
      width='full'
      overflow='hidden'>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left='0%'
        top={['67%', '35%']}
        p={[6, 8, 8, 8, 8, 8]}
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
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right='0%'
        top={['67%', '35%']}
        p={[6, 8, 8, 8, 8, 8]}
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
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
              <Stack
                spacing={6}
                w='full'
                maxW='full'
                position='relative'
                top='50%'
                transform='translate(0, -50%)'
              >
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
              </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

