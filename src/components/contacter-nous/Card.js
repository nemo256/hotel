import {
  Stack,
  Flex,
  Heading,
  HStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Icon,
  Textarea,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'

// Custom Header component
import Header from '../../components/Header'

// Custom Button component
import OutlineButton from '../../components/OutlineButton'


export default function Card() {
  return (
    <>
      <Header
      >
        {{
           title: 'Contacter-nous',
           content: 'Vous avez une question sur Hotel21? Nous sommes là pour vous aider! Remplissez le formulaire ci-dessous ou contactez-nous directement au +213 21 00 52 10. Nous répondrons aux demandes sur le site web dans les 24 heures, Merci et au plaisir d\'avoir de vos nouvelles.'
        }}
      </Header>
      <Stack minH='100vh' direction={['column-reverse', 'row']}>
        <Flex
          p={8}
          flex={1}
          align='center'
          justify='center'
          borderWidth='1px'
          borderRadius='lg'
        >
          <Stack spacing={4} w='full' maxW='md'>
            <Heading fontSize='2xl' mb={4}>Envoyez-nous un message</Heading>
            <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>Nom</FormLabel>
                    <InputGroup>
                      <InputLeftElement children=<BsPerson /> />
                      <Input type='text' placeholder='Saisir votre nom' />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName' isRequired >
                    <FormLabel>Prénom</FormLabel>
                    <InputGroup>
                      <InputLeftElement children=<BsPerson /> />
                      <Input type='text' placeholder='Saisir votre prénom' />
                    </InputGroup>
                  </FormControl>
                </Box>
              </HStack>
            <FormControl id='telephone' isRequired>
              <FormLabel>Téléphone</FormLabel>
              <InputGroup>
                <InputLeftElement children=<MdPhone /> />
                <Input type='telephone'  placeholder='Saisir votre numéro de téléphone' />
              </InputGroup>
            </FormControl>
            <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children=<MdOutlineEmail /> />
                <Input type='email' placeholder='Saisir votre email'/>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name='message'
                placeholder='Votre Message'
                rows={6}
                resize='none'
              />
            </FormControl>
            <OutlineButton>
              Envoyer
            </OutlineButton>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt='Room Image'
            objectFit='cover'
            src='./defaultBcg.jpg'
          />
        </Flex>
      </Stack>
    </>
  )
}
