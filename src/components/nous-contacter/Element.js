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
  Textarea,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import {  MdOutlineEmail,MdPhone } from 'react-icons/md';

export default function Element() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Contactez-Nous</Heading>
          <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nom</FormLabel>
                  <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input type="text" placeholder="Saisir votre nom"/>
                  </InputGroup>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired >
                  <FormLabel>Prénom</FormLabel>
                  <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input type="text" placeholder="Saisir votre prénom" />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
          <FormControl id="telephone" isRequired>
            <FormLabel>Téléphone</FormLabel>
            <InputGroup>
            <InputLeftElement children={<MdPhone />} />
            <Input type="telephone"  placeholder="Saisir votre numéro de téléphone"/>
            </InputGroup>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
            <InputLeftElement children={<MdOutlineEmail />} />
            <Input type="email" placeholder="Saisir votre email"/>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Votre Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
              Envoyer
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Room Image'}
          objectFit={'cover'}
          src={'..//defaultBcg.jpg '}
        />
      </Flex>
    </Stack>
  );
}
