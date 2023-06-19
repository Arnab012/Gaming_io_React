import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Uplode = () => {
  return (
    <>
    <Container maxH={"container.xl"} h={"100vh"} p={"16"}>
<VStack color={"purple.500"} justifyContent={"center"} h={"full"}>
    <AiOutlineCloudUpload size={"10vmax"}/>

    <form >

        <HStack>
<Input required type={"file"}  css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
    />
<Button colorScheme={"purple"} type={"submit"}>Uplode</Button>

        </HStack>
    </form>


</VStack>

    </Container>
      
    </>
  )
}

export default Uplode
