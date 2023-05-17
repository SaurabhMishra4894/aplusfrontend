import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Button,
  InputRightAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Appstore from '../../Store/Appstore';
import { Link, useNavigate } from 'react-router-dom';
import firstImage from '../../assets/part/2.jpeg';
import secondImage from '../../assets/part/22.jpeg';
import thirdImage from '../../assets/part/23.jpeg';
import fourthImage from '../../assets/part/24.jpeg';
import fifthImage from '../../assets/part/25.jpeg';
import sixImage from '../../assets/part/26.jpeg';
import sevenImage from '../../assets/part/27.jpeg';
import eightImage from '../../assets/part/28.jpeg';
import ProgressBar from '@badrap/bar-of-progress';

const Dj = () => {
  const progress = new ProgressBar({
    size: 2,
    color: "#29e",
    className: "bar-of-progress",
    delay: 80,
    });
    setTimeout(() => {
      progress.finish();
    }, 2000);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  const navigate = useNavigate();
  const gotonext = () => {
    navigate('/participation');
  };
  return (
    <Box className="MainParticipation" as="section">
      <Button left={20} position={'absolute'} onClick={gotonext}>
        Go Back
      </Button>

      <Heading>DJ-Expo-2018</Heading>

      <Box className="firstBoxparticipationImage">
        <Image loading="lazy" className="imagesmumbai" src={firstImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={secondImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={thirdImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={fourthImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={fifthImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={sixImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={sevenImage} alt="DJ-Expo-2018" />
        <Image loading="lazy" className="imagesmumbai" src={eightImage} alt="DJ-Expo-2018" />
      </Box>
    </Box>
  );
};
export default React.memo(Dj);
