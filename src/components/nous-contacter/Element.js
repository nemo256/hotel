import {
  form,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

export default function Element() {
  return (
    <>
    <Box my={8} textAlign='left'>
      <form>
 
        <FormControl>
          <FormLabel>Name :
          </FormLabel>
          <Input type='text' placeholder='Enter your name' />
        </FormControl>
 
        <FormControl>
          <FormLabel>Email :
           </FormLabel>
          <Input type='email' placeholder='Enter your email' />
        </FormControl>
 
        <FormControl>
          <FormLabel>Message :</FormLabel>
          <Textarea type='textarea' placeholder='Enter your message' />
        </FormControl>
 
        <Button variantColor="blue" type="submit" mt={4}>Submit</Button>
        
      </form>
    </Box>
    
    </>
  )
}

