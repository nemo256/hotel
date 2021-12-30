import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Link,
  Center,
  Stack,
  Heading,
  Text,
  Icon
} from "@chakra-ui/react";
    //testimonial data
    const testimonials = [
        {
            image:'room-1.jpeg',
            name:'Mohamed.B',
            date:'April 2017',
            text: ' The hotel 21 is an excellent choice for anybody considering hosting their events there. Top level facilities and excellent staff make for a brilliant environment within which to operate..'
        },
        {
            image:'room-1.jpeg',
            name:'Amine.N',
            date:'April 2017',
            text: ' The hotel 21 is an excellent choice for anybody considering hosting their events there. Top level facilities and excellent staff make for a brilliant environment within which to operate..'
        },
        {
            image:'room-1.jpeg',
            name:'Insaf.I',
            date:'April 2017',
            text: ' The hotel 21 is an excellent choice for anybody considering hosting their events there. Top level facilities and excellent staff make for a brilliant environment within which to operate..'
        },
        {
            image:'room-1.jpeg',
            name:'Insaf I',
            date:'April 2017',
            text: ' The hotel 21 is an excellent choice for anybody considering hosting their events there. Top level facilities and excellent staff make for a brilliant environment within which to operate..'
        },
        
        
    ];

    function Testimonials() {
    return (
        <>
        <Center h={300} mt={[16, 12, 0]} mb={[16, 12, 0]} mx={2}>
            <Stack 
            spacing={4} 
            mr={5} 
            ml={5}
            >
                <Heading color='primary' size='xl' mb={2} align='center'>
                    Témoignage
                </Heading>
                <Text color='primary' fontSize='2xl' align='center'>
                C'est une sorte d'avis ou d'opinion à notre sujet de la part de clients du monde entier
                </Text>
            </Stack>
        </Center>
        <Center >
            <Grid
            mr={10} 
            ml={10}
            templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']}
            templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}
            gap={20}
            >
            {testimonials.map((testimonial, index) => (
                <GridItem key={index}  h='100%' colSpan={2}>
                    <Box 
                    mx="auto"
                    py={4}
                    px={8}
                    bg={'gray.200'}
                    shadow="lg"
                    rounded="lg"
                    >
                        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
                            <Image
                            w={20}
                            h={20}
                            fit="cover"
                            rounded="full"
                            borderStyle="solid"
                            borderWidth={2}
                            borderColor={useColorModeValue("brand.500", "brand.400")}
                            alt="Testimonial avatar"
                            src={testimonial.image}
                            />
                        </Flex>
                        <chakra.h2
                        color={'primary'}
                        fontSize={{ base: "xl", md: "1xl" }}
                        mt={{ base: 2, md: 0 }}
                        fontWeight="bold">
                            {testimonial.date}
                        </chakra.h2>
                        <chakra.p
                        mt={2}
                        color={'gray.600'}
                        fontSize={{ base: "md", md: "md" }}>
                        {testimonial.text}
                        </chakra.p>
                        <Flex justifyContent="end" mt={4}>
                            <Link
                            fontSize="xl"
                            color={'gray.200'}
                            >
                            {testimonial.name}
                            </Link>
                        </Flex>
                        <Box>
                        <Icon viewBox="0 0 40 35" mt={8} boxSize={8} color={'blue.400'}>
                        <path
                            fill={'currentColor'}
                            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                        />
                        </Icon>
                        </Box>
                    </Box>
                </GridItem>
                ))}
            </Grid>
       </Center>
        
        </>
    );
    };

    export default Testimonials;
