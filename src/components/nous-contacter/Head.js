import {
    Center,
    Stack,
    Text,
    Heading
  } from '@chakra-ui/react'
  
  
  export default function Head() {
    return (
      <>
        <Center h={300} mt={[16, 12, 0]} mx={2}>
          <Stack spacing={4}>
            <Heading color='primary' size='xl' mb={2} align='center'>
            CONTACTEZ  HÔTEL21 
            </Heading>
            <Text 
              px={[0, 4, 8, 20, 40, 60]}
              noOfLines={[8, 4, 3]} 
              align='center'
            >
                Vous avez une question sur  Hôtel21 ? Nous sommes là pour vous aider ! 
         Remplissez le formulaire ci-dessous ou contactez-nous directement au +213 21 00 52 10.
            </Text>
            <Text 
              px={[0, 4, 8, 20, 40, 60]}
              noOfLines={[8, 4, 3]} 
              align='center'
            >
            Nous répondrons aux demandes sur le site web dans les 24 heures. 
 Une exception s'applique aux demandes de réservation soumises pendant le week-end (vendredi-dimanche), qui seront traitées le lundi suivant. 
           Merci et au plaisir d'avoir de vos nouvelles !          
 </Text>
          </Stack>
        </Center>
      </>
    )
  }
