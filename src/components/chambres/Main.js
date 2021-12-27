import {
  Flex,
  Box,
  Image,
} from '@chakra-ui/react'

// Reveal animation on room pictures
import Fade from 'react-reveal/Bounce';


export default function Main() {
  return (
    <>
      <Flex mt={[16, 12, 0]}>
        <Fade bottom>
          <Image
            src='./brownRoom.jpg' alt='Brown Room'
            mt={[16, 12, 0]}
          />
        </Fade>
      </Flex>
    </>
  )
}
