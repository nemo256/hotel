import { 
  Button,
  Box,
  Image,
  HStack,
  Stack,
  Flex,
  Tooltip, 
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import routes from '../../../routes'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <HStack
      position='fixed'
      insetX={0}
      justify='center'
      p={3}
      top={0}
      zIndex={10}
      opacity={0.9}
      display='flex'
    >
      <Flex
        w='100%'
        align='center'
        justify='center'
        content='center'
      >
        <Tooltip
          hasArrow 
          label='Hotel 21'
          bg='black'
          color='primary'
          placement='auto'
        >
          <Image
            boxSize={10}
            src='logo.png'
            mx={2}
            mr={12}
            _focus={{  }}
          >
          </Image>
        </Tooltip>
        <Spacer />
        <IconButton
          aria-label='Open Menu'
          bgColor='white'
          color='black'
          outline='none'
          variant='unstyled'
          icon={ 
            isOpen ?
              <CgClose size={30} />
              : <GiHamburgerMenu size={30} /> 
          }
          onClick={isOpen ? onClose : onOpen}
          display={{ 
            sm: !isOpen ? 'inherit' : 'inherit',
            md: !isOpen ? 'none' : 'inherit',
            lg: !isOpen ? 'none' : 'inherit',
            xl: !isOpen ? 'none' : 'inherit',
            '2xl': !isOpen ? 'none' : 'inherit',
          }}
          _focus={{  }}
        >
        </IconButton>
        <HStack
          display={['none', 'none', 'flex', 'flex', 'flex']}
        >
        {routes.map((route, index) => (
          <Link 
            key={index}
            href={route.path}
            passHref
          >
            <Button
              as='a'
              bg='none'
              textColor='black'
              fontWeight='bold'
              _hover={{
                textColor: 'primary',
                fontWeight: 'extrabold',
              }}
              _focus={{  }}
            >
              {route.label}
            </Button>
          </Link>
        ))}
        </HStack>
        <Spacer 
          display={['none', 'none', 'flex', 'flex', 'flex']}
        />
        <Link 
          href='/'
          passHref
          display={['none', 'none', 'flex', 'flex', 'flex']}
        >
          <Button
            as='a'
            bg='none'
            border='2px'
            borderRadius={0}
            fontWeight='bold'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            display={['none', 'none', 'flex', 'flex', 'flex']}
            _hover={{
              bg: 'primary',
              textColor: 'black',
              fontWeight: 'extrabold'
            }}
            _active={{
              bg: 'primary',
              transform: 'scale(0.98)',
            }}
            _focus={{  }}
          >
            Réserver
          </Button>
        </Link>
      </Flex>
    </HStack>
    {isOpen ? (
          <Box pb={4}>
            <Stack 
              as='nav'
              spacing={4}
              align='center'
            >
            {routes.map((route, index) => (
              <Link 
                key={index}
                href={route.path}
                passHref
              >
                <Button
                  as='a'
                  py={8}
                  bg='none'
                  w='100%'
                  fontWeight='bold'
                  onClick={onClose}
                  _focus={{  }}
                >
                  {route.label}
                </Button>
              </Link>
            ))}
            <Link 
              href='/'
              passHref
              display={['flex', 'flex', 'none', 'none', 'none']}
            >
              <Button
                as='a'
                bg='none'
                border='2px'
                borderRadius={0}
                fontWeight='bold'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                display={['flex', 'flex', 'none', 'none', 'none']}
                _hover={{
                  bg: 'primary',
                  textColor: 'black',
                  fontWeight: 'extrabold'
                }}
                _active={{
                  bg: 'primary',
                  transform: 'scale(0.98)',
                }}
                _focus={{  }}
              >
                Réserver
              </Button>
            </Link>
            </Stack>
          </Box>
        ) : null}
    </>
  );
};
