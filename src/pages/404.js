import {
  Center,
  Stack,
  Text,
  Heading
} from '@chakra-ui/react'


export default function Header() {
  return (
    <Stack
      mt='90'
      maxW='100%'
      direction='column'
      zIndex={1}
    >
    <Center h={200} mx={2}>
      <Stack w={['95%', '90%', '100%', '100%', '95%']}>
        <Text color='primary' fontSize='8xl' align='center'>
          404
        </Text>
        <Text as='b' fontSize='2xl' align='center'>
          Ooops!!
        </Text>
        <Text 
          px={[0, 4, 8, 20, 40, 60]}
          noOfLines={[10, 5, 3]} 
          align='center'
        >
          Cette page n'existe pas ou est indisponible.
        </Text>
      </Stack>
    </Center>
    </Stack>
  )
}
