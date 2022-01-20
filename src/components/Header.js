import { 
  Heading,
  Text,
  Stack
} from '@chakra-ui/react'


export default function Header({ children, ...props }) {
  return (
    <Stack 
      h={props.h ? props.h : 200}
      py={props.py ? props.py : 0}
      px={props.px ? props.px : 2}
      bg={props.bg ? props.bg : 'none'}
      mt={[12, 10, 8]}
      mx={2}
      spacing={4}
      w={['95%', '90%', '100%', '100%', '95%']}
      alignItems='center'
    >
      <Text
        color='primary'
        fontSize='2xl'
        mb={0}
        align='center'
        display={children.title ? 'flex' : 'none'}
      >
        {children.title}
      </Text>
      <Text 
        color='primary'
        fontSize='3xl'
        fontWeight='bold'
        pb={2}
        align='center'
        display={children.heading ? 'flex' : 'none'}
      >
        {children.heading}
      </Text>
      <Text 
        as='i'
        px={[0, 4, 8, 20, 40, 60]}
        noOfLines={[10, 8, 4]} 
        color='gray.600'
        align='center'
        display={children.content ? 'flex' : 'none'}
      >
        {children.content}
      </Text>
    </Stack>
  )
}
