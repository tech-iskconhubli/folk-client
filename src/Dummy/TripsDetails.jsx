// src/TripDetailsPage.js

import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  GridItem,
  Container,
  List,
  ListItem,
  ListIcon,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react';
import { CheckCircleIcon, CalendarIcon, InfoIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { tripData } from './TripForm';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const TripDetailsPage = () => {
  const { tripName, from, to, fromDate, toDate, img, description, price, placesOfVisit, additionalFields } = tripData;
  const containerWidth = useBreakpointValue({ base: '100%', md: '90%' });

  return (
    <Container maxW={containerWidth} margin="auto" p={4}>
      {/* Background Image with Heading */}
      <MotionBox
        bgImage={`url(${img[0]})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box bg="rgba(0, 0, 0, 0.5)" p={6} borderRadius="md">
          <Heading>{tripName}</Heading>
        </Box>
      </MotionBox>

      {/* Trip Details */}
      <Flex direction={{ base: 'column', lg: 'row' }} p={8} gap={8}>
        <VStack spacing={4} align="start" flex="1">
          <Text fontSize="lg">
            <CalendarIcon mr={2} />
            <strong>From:</strong> {from}
          </Text>
          <Text fontSize="lg">
            <CalendarIcon mr={2} />
            <strong>To:</strong> {to}
          </Text>
          <Text fontSize="lg">
            <CalendarIcon mr={2} />
            <strong>From Date:</strong> {fromDate}
          </Text>
          <Text fontSize="lg">
            <CalendarIcon mr={2} />
            <strong>To Date:</strong> {toDate}
          </Text>
          <Text fontSize="lg">
            {/* <DollarSignIcon mr={2} /> */}
            <strong>Price:</strong> ${price}
          </Text>
          <Text fontSize="lg">
            <InfoIcon mr={2} />
            <strong>Description:</strong> {description}
          </Text>
        </VStack>

        <Box flex="1">
          <Text fontSize="lg" mb={4}>
            {/* <MapPinIcon mr={2} /> */}
            <strong>Places of Visit:</strong>
          </Text>
          <List spacing={2} pl={4}>
            {placesOfVisit.map((place, index) => (
              <ListItem key={index}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {place}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>

      {/* Additional Fields (Accordion) */}
      <Box p={8} width="100%">
        <Accordion allowMultiple>
          {additionalFields.map((field, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {field.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {field.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Related Images */}
      <Box p={8} width="100%">
        <Heading size="md" mb={4}>Related Images</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {img.slice(1).map((image, index) => (
            <GridItem key={index}>
              <MotionImage
                src={image}
                alt={`Trip Image ${index + 1}`}
                borderRadius="md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default TripDetailsPage;
