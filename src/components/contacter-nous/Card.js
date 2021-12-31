import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Image,
  Icon,
  Text,
  Textarea,
  InputGroup,
  InputLeftElement,
  Stack
} from '@chakra-ui/react'
import { BsPerson, BsFillBriefcaseFill } from 'react-icons/bs'
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md'

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
           content: 'Vous avez une question sur Hotel21? Nous sommes là pour vous aider! Remplissez le formulaire ci-dessous ou contactez-nous directement au +213 23 100 101. Nous répondrons aux demandes sur le site web dans les 24 heures, Merci et au plaisir d\'avoir de vos nouvelles.'
        }}
      </Header>
      <Stack 
        mt={[12, 10, 8, 0, 0, 0]}
        mx={[2, 4, 4, 4, 4, 4]}
        direction={['column-reverse', 'column-reverse', 'row', 'row', 'row', 'row']}
        border='1px'
        borderRadius='none'
      >
        <Flex
          p={8}
          flex={1}
          align='center'
          justify='center'
        >
          <Stack spacing={4} w='full'>
            <Heading align='center' fontSize='2xl' mb={4}>
              Envoyez-nous un message
            </Heading>
            <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>Nom</FormLabel>
                    <InputGroup border='0.5px'>
                      <InputLeftElement children=<BsPerson /> />
                      <Input
                        type='text'
                        placeholder='Saisir votre nom'
                        borderRadius='none'
                        _placeholder={{ 
                          color: 'black',
                          fontWeight: 'normal'
                        }}
                        _hover={{
                          borderColor: 'primary'
                        }}
                        _focus={{
                          border: '1px',
                          borderColor: 'primary',
                        }}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName' isRequired >
                    <FormLabel>Prénom</FormLabel>
                    <InputGroup border='0.5px'>
                      <InputLeftElement children=<BsPerson /> />
                      <Input
                        type='text'
                        placeholder='Saisir votre prénom'
                        borderRadius='none'
                        _placeholder={{ 
                          color: 'black',
                          fontWeight: 'normal'
                        }}
                        _hover={{
                          borderColor: 'primary'
                        }}
                        _focus={{
                          border: '1px',
                          borderColor: 'primary',
                        }}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
              </HStack>
            <FormControl id='telephone' isRequired>
              <FormLabel>Téléphone</FormLabel>
              <InputGroup border='0.5px'>
                <InputLeftElement children=<MdPhone /> />
                <Input
                  type='telephone'
                  placeholder='Saisir votre numéro de téléphone'
                  borderRadius='none'
                  _placeholder={{ 
                    color: 'black',
                    fontWeight: 'normal'
                  }}
                  _hover={{
                    borderColor: 'primary'
                  }}
                  _focus={{
                    border: '1px',
                    borderColor: 'primary',
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup border='0.5px'>
                <InputLeftElement children=<MdOutlineEmail /> />
                <Input 
                  type='email'
                  placeholder='Saisir votre email'
                  borderRadius='none'
                  _placeholder={{ 
                    color: 'black',
                    fontWeight: 'normal'
                  }}
                  _hover={{
                    borderColor: 'primary'
                  }}
                  _focus={{
                    border: '1px',
                    borderColor: 'primary',
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name='message'
                placeholder='Votre Message'
                rows={6}
                resize='none'
                border='1px'
                borderColor='black'
                borderRadius='none'
                _placeholder={{ 
                  color: 'black',
                  fontWeight: 'normal'
                }}
                _hover={{
                  borderColor: 'primary'
                }}
                _focus={{
                  border: '1px',
                  borderColor: 'primary',
                }}
              />
            </FormControl>
            <OutlineButton>
              Envoyer
            </OutlineButton>
          </Stack>
        </Flex>
        <Divider orientation={['horizontal', 'horizontal', 'vertical', 'vertical', 'vertical', 'vertical']} />
        <Flex
          p={8}
          flex={1}
          justify='center'
          justifyContent='center'
        >
          <Stack spacing={4} w='full' mt={[6, 8]}>
            <Flex p={4} h={[220, 240, 260, 280, 300]} justifyContent='center'>
              <svg 
                x='0px'
                y='0px'
                viewBox='0 0 511.998 511.998'
                fill='#b29700'
              >
                <path d='M238.501,39.78c-1.169-3.482-4.42-5.837-8.098-5.837h-37.394L178.306,4.528c-2.893-5.786-12.382-5.786-15.275,0
                    l-14.702,29.414h-37.393c-3.678,0-6.938,2.355-8.098,5.837c-1.161,3.482,0.043,7.322,2.978,9.523l29.832,22.374l-7.475,37.393
                    c-0.7,3.465,0.819,6.997,3.806,8.892c2.987,1.894,6.835,1.741,9.66-0.375l29.03-21.666l29.03,21.666
                    c1.51,1.126,3.302,1.69,5.103,1.69c1.579,0,3.166-0.435,4.557-1.314c2.987-1.894,4.506-5.427,3.806-8.892l-7.475-37.393
                    l29.833-22.374C238.458,47.101,239.662,43.261,238.501,39.78z'/>
                <path d='M409.168,39.78c-1.169-3.482-4.42-5.837-8.098-5.837h-37.393L348.973,4.528c-2.893-5.786-12.382-5.786-15.275,0
                    l-14.703,29.414h-37.393c-3.678,0-6.938,2.355-8.098,5.837c-1.161,3.482,0.043,7.322,2.978,9.523l29.833,22.374l-7.475,37.393
                    c-0.7,3.465,0.819,6.997,3.806,8.892c2.987,1.894,6.835,1.741,9.66-0.375l29.03-21.666l29.03,21.666
                    c1.51,1.126,3.302,1.69,5.103,1.69c1.579,0,3.166-0.435,4.557-1.314c2.987-1.894,4.506-5.427,3.806-8.892l-7.475-37.393
                    l29.833-22.374C409.125,47.101,410.329,43.261,409.168,39.78z'/>
                <path d='M119.469,324.076H85.336c-4.71,0-8.533,3.814-8.533,8.533v51.2c0,4.719,3.823,8.533,8.533,8.533h34.133
                    c4.71,0,8.533-3.814,8.533-8.533v-51.2C128.002,327.891,124.179,324.076,119.469,324.076z'/>
                <path d='M119.469,409.41H85.336c-4.71,0-8.533,3.814-8.533,8.533v51.2c0,4.719,3.823,8.533,8.533,8.533h34.133
                    c4.71,0,8.533-3.814,8.533-8.533v-51.2C128.002,413.224,124.179,409.41,119.469,409.41z'/>
                <path d='M426.669,324.076h-34.133c-4.71,0-8.533,3.814-8.533,8.533v51.2c0,4.719,3.823,8.533,8.533,8.533h34.133
                    c4.71,0,8.533-3.814,8.533-8.533v-51.2C435.202,327.891,431.38,324.076,426.669,324.076z'/>
                <path d='M426.669,409.41h-34.133c-4.71,0-8.533,3.814-8.533,8.533v51.2c0,4.719,3.823,8.533,8.533,8.533h34.133
                    c4.71,0,8.533-3.814,8.533-8.533v-51.2C435.202,413.224,431.38,409.41,426.669,409.41z'/>
                <path d='M503.466,494.743h-25.6V298.476c0-4.719-3.814-8.533-8.533-8.533H358.399V144.876c0-4.719-3.814-8.533-8.533-8.533
                    H162.132c-4.71,0-8.533,3.814-8.533,8.533v145.067H42.666c-4.71,0-8.533,3.814-8.533,8.533v196.267h-25.6
                    c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h34.133h119.467h59.733v-93.867c0-4.719,3.823-8.533,8.533-8.533h51.2
                    c4.719,0,8.533,3.814,8.533,8.533v93.867h59.733h119.467h34.133c4.719,0,8.533-3.814,8.533-8.533
                    C511.999,498.557,508.185,494.743,503.466,494.743z M153.599,494.743h-102.4V307.01h102.4V494.743z M238.932,349.676
                    c0,4.719-3.814,8.533-8.533,8.533h-34.133c-4.71,0-8.533-3.814-8.533-8.533v-68.267c0-4.719,3.823-8.533,8.533-8.533h34.133
                    c4.719,0,8.533,3.814,8.533,8.533V349.676z M238.932,247.276c0,4.719-3.814,8.533-8.533,8.533h-34.133
                    c-4.71,0-8.533-3.814-8.533-8.533v-68.267c0-4.719,3.823-8.533,8.533-8.533h34.133c4.719,0,8.533,3.814,8.533,8.533V247.276z
                     M315.733,358.209h-34.134c-4.71,0-8.533-3.814-8.533-8.533v-68.267c0-4.719,3.823-8.533,8.533-8.533h34.133
                    c4.719,0,8.533,3.814,8.533,8.533v68.267h0.001C324.266,354.395,320.452,358.209,315.733,358.209z M315.733,255.809h-34.134
                    c-4.71,0-8.533-3.814-8.533-8.533v-68.267c0-4.719,3.823-8.533,8.533-8.533h34.133c4.719,0,8.533,3.814,8.533,8.533v68.267h0.001
                    C324.266,251.995,320.452,255.809,315.733,255.809z M460.799,494.743h-102.4V307.01h102.4V494.743z'/>
                <rect x='204.799' y='187.543' width='17.067' height='51.2'/>
                <rect x='290.132' y='289.943' width='17.067' height='51.2'/>
                <rect x='204.799' y='289.943' width='17.067' height='51.2'/>
                <rect x='238.932' y='426.476' width='34.134' height='85.334'/>
                <rect x='290.132' y='187.543' width='17.067' height='51.2'/>
              </svg>
            </Flex>
            <Heading align='center' fontSize='2xl' pt={[0, 2, 4]}>
              Hotel 21 - ALger
            </Heading>
            <Stack 
              pt={4}
              spacing={2}
              direction='column'
              alignItems='center'
            >
              <OutlineButton
                size='md'
                h='48px'
                w='200px'
                color='black'
                _hover={{
                  border: '2px solid black',
                  borderRadius: 'none'
                }}
                _active={{
                  border: '2px',
                  borderColor: 'primary',
                  borderRadius: 'none'
                }}
                _focus={{  }}
                leftIcon={<MdPhone color='black' size='20px' />}
              >
                +213 23 100 101 
              </OutlineButton>
              <OutlineButton
                size='md'
                h='48px'
                w='200px'
                color='black'
                _hover={{
                  border: '2px solid black',
                  borderRadius: 'none'
                }}
                _active={{
                  border: '2px',
                  borderColor: 'primary',
                  borderRadius: 'none'
                }}
                _focus={{  }}
                leftIcon={<MdOutlineEmail color='black' size='20px' />}
              >
                hotel21@mail.com
              </OutlineButton>
              <OutlineButton
                size='md'
                h='48px'
                w='200px'
                color='black'
                _hover={{
                  border: '2px solid black',
                  borderRadius: 'none'
                }}
                _active={{
                  border: '2px',
                  borderColor: 'primary',
                  borderRadius: 'none'
                }}
                _focus={{  }}
                leftIcon={<MdLocationOn color='black' size='20px' />}>
                Algiers, Algeria
              </OutlineButton>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
