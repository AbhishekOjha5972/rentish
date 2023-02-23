import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Icon,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Image,
  InputLeftElement
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon,PhoneIcon } from '@chakra-ui/icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={3}>
        {/* <Stack align={'center'}>
        
          
        </Stack> */}
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.300')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          pb={8}
          >
          <Image w="100%" src='https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg'/>
          <Heading pt="10" pb="10" fontSize={'4xl'} textAlign={'center'}>
          Enter details to sign-up
          </Heading>
          <Stack spacing={4}>
            {/* <HStack> */}
              <Box>
              
              </Box>    
            <FormControl id="email" isRequired>
              <FormLabel color={"#00BE2D"}>Email address</FormLabel>
              <Input type="email"  />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"#00BE2D"}  >Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          
  
              {/* phone */}
              <InputGroup isRequired>
              <InputLeftElement>
              <PhoneIcon/>
            
              </InputLeftElement>
              <Input placeholder='Enter Mobile Number'/>
            </InputGroup>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={' #00BE2D'}
                color={'white'}
                _hover={{
                  bg: '#00BE2D',
                }}>
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Dont Have an Account? <Link color={'#00BE2D'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login