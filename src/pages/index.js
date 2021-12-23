import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'


const Index = () => {
  return (
    <Alert status='success'>
      <AlertIcon />
      <AlertTitle mr={2}>Website successfully deployed!</AlertTitle>
      <CloseButton position='absolute' right='8px' top='8px' />
    </Alert>
  )
}

export default Index
