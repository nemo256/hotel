import { Stack } from '@chakra-ui/react'
import Header from '../components/chambres/Header'
import Main from '../components/chambres/Main'

export default function Chambres() {
  return (
    <>
      <Stack
        mt={16}
        maxW='100%'
        justify='center'
        align='center'
      >
        <Header />
        <Main />
      </Stack>
    </>
  )
}
