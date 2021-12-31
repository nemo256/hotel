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
      <Text color='primary' fontSize='2xl' mb={0} align='center'>
        {children.title}
      </Text>
      <Heading as={'b', 'i'} color='primary' size='lg' pb={2} align='center'>
        {children.heading}
      </Heading>
      <Text 
        px={[0, 4, 8, 20, 40, 60]}
        noOfLines={[10, 5, 3]} 
        color='gray.600'
        align='center'
      >
        {children.content}
      </Text>
    </Stack>
  )
}