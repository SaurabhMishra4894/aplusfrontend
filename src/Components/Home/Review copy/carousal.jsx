import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import SingleReview from './singleReview';
import './index.css';
import Appstore from '../../../Store/Appstore';
// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  swipeToSlide: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  speed: 500,
  infinite: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: '10px',
  slidesToScroll: 1,
};
const settingsMobile = {
  dots: false,
  arrows: false,
  swipeToSlide: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  speed: 500,
  infinite: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '10px',
  slidesToScroll: 1,
};

const ReviewCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '60%', md: '60%' });
  const side = useBreakpointValue({ base: '10px', md: '10px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      name: 'Mr. Sumeet Keswani - Saraswati Electronics',
      text: 'We swear by the Quality and servive of A Plus Crossovers and Compression Drivers no1 in our market.',
      city: 'Jaipur, Rajasthan',
      name1: 'Mr. Deepak Batra - J.R.C',
      text1:
        'We have been selling A Plus for 20 years through consistent development in technology we have grown with the BRAND A Plus.',
      city1: 'New Delhi, Delhi',

      name2: 'Mr. Harshdeep Gosaliya - Telestar ',
      text2:
        'A-Plus has been the focus of our orgnasation since 1999 and we have whole heartedly and exclusively sold A PLUS and is VALUE FOR MONEY product.',
      city2: 'Rajkot, Gujarat',
    },

    {
      name1: 'Mr. Sumeet Keswani - Saraswati Electronics',
      text1:
        'We swear by the Quality and servive of A Plus Crossovers and Compression Drivers no1 in our market.',
      city1: 'Jaipur, Rajasthan',

      name: 'Mr. Harshdeep Gosaliya - Telestar ',
      text: 'A-Plus has been the focus of our orgnasation since 1999 and we have whole heartedly and exclusively sold A PLUS and is VALUE FOR MONEY product.',
      city: 'Rajkot, Gujarat',

      name2: 'Mr. Dilip Jain - Rythm Art',
      text2:
        'We know that A Plus is Leading Brand in Professional Audio and are proud to be associated with them for almost 1o years the 12 FRDC is Fantastic.',
      city2: 'Mumbai, Maharashtara',
    },
    {
      name1: 'Mr. Harshdeep Gosaliya - Telestar ',
      text1:
        'A-Plus has been the focus of our orgnasation since 1999 and we have whole heartedly and exclusively sold A PLUS and is VALUE FOR MONEY product.',
      city1: 'Rajkot, Gujarat',

      name: 'Mr. Dilip Jain - Rythm Art',
      text: 'We know that A Plus is Leading Brand in Professional Audio and are proud to be associated with them for almost 1o years the 12 FRDC is Fantastic.',
      city: 'Mumbai, Maharashtara',

      name2: 'Mr. Jaimin Rokadia - Hari Electronics',
      text2:
        'Our Association with the group is Since is since 2002 we are one of the first few dealers we owe a lot to A Plus for our multiple growth in the Industry.',
      city2: 'Vadodara, Gujarat',
    },
    {
      name: 'Mr. Jaimin Rokadia - Hari Electronics',
      text: 'Our Association with the group is Since is since 2002 we are one of the first few dealers we owe a lot to A Plus for our multiple growth in the Industry.',
      city: 'Vadodara, Gujarat',

      name1: 'Mr. Dilip Jain - Rythm Art',
      text1:
        'We know that A Plus is Leading Brand in Professional Audio and are proud to be associated with them for almost 1o years the 12 FRDC is Fantastic.',
      city1: 'Mumbai, Maharashtara',

      name2: 'Mr. Ritesh Jain - Jain Radios',
      text2:
        'As the brand says we A Plus is A Plus 25years of association with Yogeshji even before A Plus was born makes us the oldest dealer in the Family we are proud of our Association with them.',
      city2: 'Bhopal, Madhya Pradesh',
    },
    {
      name1: 'Mr. Jaimin Rokadia - Hari Electronics',
      text1:
        'Our Association with the group is Since is since 2002 we are one of the first few dealers we owe a lot to A Plus for our multiple growth in the Industry.',
      city1: 'Vadodara, Gujarat',

      name: 'Mr. Ritesh Jain - Jain Radios',
      text: 'As the brand says we A Plus is A Plus 25years of association with Yogeshji even before A Plus was born makes us the oldest dealer in the Family we are proud of our Association with them.',
      city: 'Bhopal, Madhya Pradesh',

      name2: 'Mr. Husain Kachachawala - Sanjari Electronics',
      text2:
        'My Father Sh.Ismail Bhai started selling A Plus in 1999 and ever since there is no looking back,We have made A Plus one of the TOP brand In Madhya Pradesh the 15" drivers and loudspeaker systems are a rage in the Market good mark up good product.',
      city2: 'Indore, Madhya Pradesh',
    },
    {
      name: 'Mr. Husain Kachachawala - Sanjari Electronics',
      text: 'My Father Sh.Ismail Bhai started selling A Plus in 1999 and ever since there is no looking back,We have made A Plus one of the TOP brand In Madhya Pradesh the 15" drivers and loudspeaker systems are a rage in the Market good mark up good product.',
      city: 'Indore, Madhya Pradesh',
      name1: 'Mr. Ritesh Jain - Jain Radios',
      text1:
        'As the brand says we A Plus is A Plus 25years of association with Yogeshji even before A Plus was born makes us the oldest dealer in the Family we are proud of our Association with them.',
      city1: 'Bhopal, Madhya Pradesh',
      name2: 'Mr. Deepak Batra - J.R.C',
      text2:
        'We have been selling A Plus for 20 years through consistent development in technology we have grown with the BRAND A Plus.',
      city2: 'New Delhi, Delhi',
    },
    {
      name: 'Mr. Deepak Batra - J.R.C',
      text: 'We have been selling A Plus for 20 years through consistent development in technology we have grown with the BRAND A Plus.',
      city: 'New Delhi, Delhi',

      name2: 'Mr. Sumeet Keswani - Saraswati Electronics',
      text2:
        'We swear by the Quality and servive of A Plus Crossovers and Compression Drivers no1 in our market.',
      city2: 'Jaipur, Rajasthan',

      name1: 'Mr. Husain Kachachawala - Sanjari Electronics',
      text1:
        'My Father Sh.Ismail Bhai started selling A Plus in 1999 and ever since there is no looking back,We have made A Plus one of the TOP brand In Madhya Pradesh the 15" drivers and loudspeaker systems are a rage in the Market good mark up good product.',
      city1: 'Indore, Madhya Pradesh',
    },
  ];

  return (
    <Box
      position={'relative'}
      minHeight={'200px'}
      width={'full'}
      p="25px 20px 0px 20px"
      maxW={1200}
      m={'auto'}
      overflow={'hidden'}
    >
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        className="buttonCarousal"
        borderRadius="full"
        position="absolute"
        // position={'relative'}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt className="buttonrealcarousal" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        className="buttonCarousal"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt className="buttonrealcarousal" />
      </IconButton>
      <Heading className="headerProducts2">Our channel partners</Heading>
      <Text maxW="736px" textAlign="center" m="auto" mb={6} mt={4}>
        Our respected Channel Partners in the audio solutions industry bring a
        wealth of knowledge and experience, working with us to deliver
        cutting-edge solutions and unparalleled audio experiences for our
        customers.
      </Text>
      {Appstore.device ? (
        <Slider {...settings} ref={slider => setSlider(slider)}>
          {cards.map((card, index) => (
            <SingleReview key={index} cards={card} />
          ))}
        </Slider>
      ) : (
        <Slider {...settingsMobile} ref={slider => setSlider(slider)}>
          {cards.map((card, index) => (
            <SingleReview key={index} cards={card} />
          ))}
        </Slider>
      )}
    </Box>
  );
};
export default React.memo(ReviewCarousel);
