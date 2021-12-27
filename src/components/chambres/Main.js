import {
  Flex,
  Box,
  Image,
} from '@chakra-ui/react'


export default function Main() {
  return (
    <>
      <Flex mt={[16, 12, 0]} bg='red'>
        <Image 
          src='./brownRoom.jpg' alt='Brown Room'
        />
      </Flex>
    </>
  )
}
