import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
      zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video_Era</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>


              <Button  onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos?catagory=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/uplode'}>Uplode video</Link>
              </Button>

            </VStack>
           
            <HStack  pos={"absolute"} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>


            <Button  onClick={onClose} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>


            <Button onClick={onClose} colorScheme={'purple'} variant={"outline"}>
              <Link to={'/signup'}>Sign UP</Link>
            </Button>


            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
