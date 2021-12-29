import {
  Center,
  Stack,
  Text,
  Heading
} from '@chakra-ui/react'


export default function Header() {
  return (
    <>
      <Center h={300} mt={[12, 10, 0]} mx={2}>
        <Stack spacing={4} w={['95%', '90%', '100%', '100%', '95%']}>
          <Heading color='primary' size='xl' mb={2} align='center'>
            Chambres
          </Heading>
          <Text as='i' color='primary' fontSize='2xl' align='center'>
            Içi, vous êtes le patron...
          </Text>
          <Text 
            px={[0, 4, 8, 20, 40, 60]}
            noOfLines={[10, 5, 3]} 
            align='center'
          >
            Spacieuses et décorées avec élégance, découvrez des chambres, parées de couleurs riches, propices à la relaxation. Équilibre raffiné du fonctionnel et du confort, les chambres de Hotel 21 se distinguent par l’accent mis sur le moindre détail, dans le seul but d’exalter votre sensation de bien-être.
          </Text>
        </Stack>
      </Center>
    </>
  )
}
