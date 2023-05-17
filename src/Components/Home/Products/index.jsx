import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Avatar,
  keyframes,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { HideLandingLoader } from '../../Common/commonfn';
import Appstore from '../../../Store/Appstore';
import First from '../../../assets/uber.svg';
import third from '../../../assets/uber2.svg';
import second from '../../../assets/ola.svg';
import { useParams } from 'react-router-dom';

const Products = () => {

  return (
    <Box className="MainProducts" as="section">
      <Heading className="headerProducts2">Trusted by partners</Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="full"
        flexWrap="wrap"
        gap={10}
        p={'0px 15px 40px 10px'}
        overflow="hidden"
      >
        <SinglePhoto image={First} name="Guitar" />
        <SinglePhoto image={second}  name="Radio" />
        <SinglePhoto image={third}  name="Drum" />
        <SinglePhoto image={First} name="Guitar" />
        <SinglePhoto image={second} name="Radio" />
        <SinglePhoto image={First} name="Drum" />
        <SinglePhoto image={third} name="Guitar" />
        <SinglePhoto image={second} name="Radio" />
      </Flex>
    </Box>
  );
};
export default React.memo(Products);

function SinglePhoto({ image, name }) {
  const color = 'teal';

  return (
    <Box
      as="div"
      position="relative"
      w={20}
      h={20}
      _before={{
        content: "''",
        position: 'relative',
        display: 'block',
        width: '300%',
        height: '300%',
        boxSizing: 'border-box',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '50%',
      }}
    >
      <Image loading="lazy"
        src={image}
        size="full"
        align="contain"
        borderRadius="50%"
        position="absolute"
        alt={name}
        top={0}
      />
    </Box>
  );
}
