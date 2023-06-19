import { Heading, Stack, VStack, Box, HStack,Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={"stretch"} w={"full"} px={"4"} >
            <Heading size="md" textTransform={'uppercase'} textAlign={"center"}>Subscribe to get Update</Heading>
            <HStack
            borderBottom={"2px solid white"} py={"2"} >
            <Input placeholder='Enter Email Here' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none'/>
              <Button
              p={"0"} colorScheme={"purple"} variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
              >
                <AiOutlineSend size={20}/>
                
              </Button>
            </HStack>
          </VStack>

<VStack w={"full"}
borderLeft={["none","1px solid white "]}
borderRight={["none","1px solid white "]}>

<Heading  textTransform={"uppercase"}  textAlign={"center"}>
    Video_Hub
</Heading>
<Text>All rights reserved by Arnab</Text>

</VStack>


<VStack w={"full"}
>
<Heading size={"md"}  textTransform={"uppercase"}>Social Media</Heading>

<Button colorScheme={"white"} variant={"link"}>

    <a href='https://youtube.com/codewithpatience'target='blank'>Youtube</a>
</Button>
<Button colorScheme={"white"} variant={"link"}>

    <a href='https://instagram.com/codewithpatience' target='blank'>Instagram</a>
</Button>

<Button colorScheme={"white"} variant={"link"}>

    <a href='https://Github.com/codewithpatience'target='blank'>Github</a>
</Button>



</VStack>

        </Stack>
      </Box>
    </>
  );
};

export default Footer;
