import {
  Center,
  Stack,
  Text,
  Heading
} from '@chakra-ui/react'


export default function Header() {
  return (
    <>
      <Center h={300} mt={[16, 12, 0]} mx={2}>
        <Stack spacing={4}>
          <Heading color='primary' size='xl' mb={2} align='center'>
            Chambres
          </Heading>
          <Text color='primary' fontSize='2xl' align='center'>
            Il n'y a qu'un patron: le client.
          </Text>
          <Text 
            px={[0, 4, 8, 20, 40, 60]}
            noOfLines={[8, 4, 3]} 
            align='center'
          >
            Spacieuses et décorées avec élégance, découvrez des chambres, parées de couleurs riches, propices à la relaxation. Équilibre raffiné du fonctionnel et du confort, les chambres de Hotel 21 se distinguent par l’accent mis sur le moindre détail, dans le seul but d’exalter votre sensation de bien-être.
          </Text>
        </Stack>
      </Center>
    </>
  )
}
