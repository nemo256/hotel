import {
  Center, Flex, Text, HStack, Box, Heading,Spacer, Divider, Icon
} from '@chakra-ui/react'
import {FaCocktail,FaHiking,FaShuttleVan,FaCoffee,GrServices} from 'react-icons'
import Fade from 'react-reveal/Bounce';


  const ArrServices =[
      {
          icon:<FaCocktail/>,
          title:"Free Cocktails",
          info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet'
      }, 
      {
          icon:<FaHiking/>,
          title:"Endless Hiking",
          info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
      },
      {
          icon:<FaShuttleVan/>,
          title:"Free Shuttle",
          info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
      },
      {
          icon:<FaCoffee/>,
          title:"Strogest Coffee",
          info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
      }
  ];

  function Feature({ /*icon,*/ title, desc,...rest }) {
    return (
      <Box
        p={5}
        
        flex='1'
        borderRadius='md'

        {...rest}
      >
        {/*<Icon>{icon}</Icon>*/}
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  

export default function Services() {
  return (
    <>
    <Center>
            <Text 
              fontSize={['4xl','5xl','6xl']} 
              textColor='black'
              fontWeight='bold'
              mt={5}
              _hover={{
                textColor: 'primary',
                fontWeight: 'extrabold',
              }}>
            Services </Text>
            
    </Center>
    <Divider color={""}/>

    <HStack spacing={5}> 
                  {ArrServices.map((service,index) => (
                  <>
                  <Feature
                    icon={service.icon}
                    title={service.title}
                    desc={service.info}
                  /> 
          
                  </>
                  ))
                  } 
    </HStack>
       </>)
}
