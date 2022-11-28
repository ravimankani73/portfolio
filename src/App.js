import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  HStack,
  Button,
  Heading,
} from '@chakra-ui/react';
import Navmanu from './components/navmenu';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navmanu />
        <Grid>
          <HStack p={'10rem'} pt={'5rem'}>
            <VStack w={'50%'} textAlign={'left'} alignItems={'flex-start'}>
              <Box className='test'>
              <Heading fontSize={'72px'}> HELLO I'M <br/>RAVI MANKANI</Heading>
              <Text pb={'24px'}>
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </Text>
              <Button colorScheme="blue">Say Hi</Button>
              </Box>
              <HStack pt={'4rem'}>
                <Box
                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'center'}
                  bg={'blue.100'}
                  padding={'17px'}
                  borderRadius={'6px'}
                >
                  <strong>15+ Y.</strong>
                  <p>Experience</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'center'}
                  bg={'blue.100'}
                  padding={'17px'}
                  borderRadius={'6px'}
                >
                  <strong>250+</strong>
                  <p>Project completed</p>
                </Box>
                <Box
                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'center'}
                  bg={'blue.100'}
                  padding={'17px'}
                  borderRadius={'6px'}
                >
                  <strong>58</strong>
                  <p>Happy Client</p>
                </Box>
              </HStack>
            </VStack>
            <Box w={'50%'}>HELLO I'M RAVI MANKANI</Box>
          </HStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
