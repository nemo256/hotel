import {
  Image
} from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Hero() {
  return (
    <>
      <Carousel emulateTouch={true} infiniteLoop={true} autoPlay={true} interval={4000}>
        <Image src='defaultBcg.jpeg' alt='first image' />
        <Image src='defaultBcg.jpeg' alt='first image' />
        <Image src='defaultBcg.jpeg' alt='first image' />
      </Carousel>
    </>
  )
}
