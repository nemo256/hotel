import {
  Box,
  Image,
  Flex,
  Grid,
  GridItem,
  Link,
  Center,
  Stack,
  Spacer,
  Heading,
  Text,
  Icon
} from '@chakra-ui/react'
import React from 'react'

// Custom Header component
import Header from '../../components/Header'


export default function Testimonials() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Mohamed Boudraa',
      position: 'Full-Stack Developer',
      image: 'room-1.jpeg',
      date: 'Decembre 2021',
      text: 'J\'ai séjourné dans une douzaine d\'hôtels à alger. Celui-ci était en haut de la liste des meilleurs séjours/expériences jamais vécus.'
    },
    {
      id: 2,
      name: 'Amine Neggazi',
      position: 'Front-End Developer',
      image: 'room-1.jpeg',
      date: 'Decembre 2021',
      text: 'Le personnel de cette propriété est formidable! Ils font tout leur possible pour rendre votre séjour confortable.'
    },
    {
      id: 3,
      name:'Insaf Bakiri',
      position: 'UI/UX Designer',
      image:'room-1.jpeg',
      date:'Decembre 2021',
      text: 'Les chambres étaient propres, très confortables, et le personnel était formidable.'
    }
  ]

  return (
    <>
      <Header
        h={[380, 320, 300]}
        py={[12, 16, 8, 20]}
      >
        {{
           title: 'Les gens nous aiment',
           heading: 'Vous êtes en bonne compagnie',
           content: 'Découvrez pourquoi plus de 12 000 personnes séjournent dans notre hôtel avec le sourire aux lèvres.'
        }}
      </Header>
      <Center >
        <Grid
          mt={2}
          mb={[0, -16, 0, 0, 0, 0]}
          mx={10} 
          maxW='1200px'
          templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}
          gap={24}
        >
        {testimonials.map((testimonial, index) => (
          <>
            {testimonial.id == 3 && <Center />}
            <GridItem key={index}  h='100%' colSpan={2}>
              <Box 
                mt={testimonial.id == 3 ? [-28, -80, 4, 2, 0] : 0}
                py={4}
                px={6}
                bg='secondary'
                shadow='lg'
              >
                <Icon 
                  viewBox='0 0 40 40'
                  mt={-10}
                  ml={-2}
                  boxSize={10}
                  color='primary'
                >
                  <path
                    fill={'currentColor'}
                    d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z'
                  />
                </Icon>
                <Flex justifyContent='center' mt={-24}>
                  <Image
                    w={24}
                    h={24}
                    fit='cover'
                    rounded='full'
                    borderStyle='solid'
                    borderWidth={4}
                    borderColor='primary'
                    alt='Testimonial avatar'
                    src={testimonial.image}
                  />
                </Flex>
                <Heading
                  mt={[4, 2]}
                  color='black'
                  fontSize={['xl', '1xl']}
                  fontWeight='bold'
                >
                  {testimonial.date}
                </Heading>
                <Text
                  mt={2}
                  pb={2}
                  color='gray.600'
                  fontSize='md'
                >
                  {testimonial.text}
                </Text>
                <Spacer />
                <Flex mt={4} alignItems='center'>
                  <Text
                    as='i'
                    mr='20px'
                    fontSize='9px'
                    color='gray.500'
                  >
                    {testimonial.position}
                  </Text>
                  <Spacer />
                  <Text
                    as='b'
                    fontSize='lg'
                    color='primary'
                  >
                    {testimonial.name}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          </>
        ))}
        </Grid>
      </Center>
    </>
  )
}
