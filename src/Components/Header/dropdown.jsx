import React, { FC } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  LinkProps,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Appstore from '../../Store/Appstore';
import { observer } from 'mobx-react';

const HoverLink = props => (
  <Link rounded="base" _hover={{ bg: 'gray.200' }} p={2} {...props} />
);

const Navigation = observer(({ onClose }) => {
  const navigate = useNavigate();
  return (
    <Stack as="nav">
      <Link to="/" onClick={() => onClose()}>
        Home
      </Link>

      <Link
        to="/about-us"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        About
      </Link>
      <Link
      
      to="/products"
        onClick={() => {
          // Appstore.setReg(true);
          onClose();
        }}
      >
        Our Prodcuts
      </Link>
      <Link
        to="/participation"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        Our Participation
      </Link>

      <Link
        to="/contact"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        Contact us
      </Link>
    </Stack>
  );
});

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="unset"
        fontSize="28px"
        padding="5px"
        onClick={onOpen}
      >
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay className="headerModal">
          <DrawerContent className="mainHeaderDrawer">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navigation className="dropdownNav" onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const LayoutWithMenu = ({ children }) => {
  return (
    <Stack>
      <HStack>
        <Box>
          <DrawerMenu />
        </Box>
      </HStack>
    </Stack>
  );
};

const Dropdown = () => {
  return <LayoutWithMenu></LayoutWithMenu>;
};

Dropdown.containerSize = 'fill';

export default React.memo(Dropdown);
