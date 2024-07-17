import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

const GalleryChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminGalleryData);

  useEffect(() => {
    dispatch(getAdminYogaFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    // Initialize arrays to store chart data
    const titles = [];
    const descriptions = [];
    const imgs = [];

    // Extract data from store
    store.forEach(data => {
      titles.push(data.title);
      descriptions.push(data.description);
      imgs.push(data.img);
    });

    // Return data object for each chart
    return {
      titles,
      descriptions,
      imgs
    };
  };

  // Data for Bar Chart (Occurrences by Title)
  const titleCounts = prepareData().titles.reduce((acc, title) => {
    acc[title] = (acc[title] || 0) + 1;
    return acc;
  }, {});
  const uniqueTitles = Object.keys(titleCounts);
  const counts = Object.values(titleCounts);

  const barData = {
    labels: uniqueTitles,
    datasets: [
      {
        label: 'Occurrences by Title',
        data: counts,
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Doughnut Chart (Distribution by Description Length)
  const descriptionLengths = prepareData().descriptions.map(description => description.length);
  const shortDescriptions = descriptionLengths.filter(length => length < 50).length;
  const mediumDescriptions = descriptionLengths.filter(length => length >= 50 && length < 100).length;
  const longDescriptions = descriptionLengths.filter(length => length >= 100).length;

  const doughnutData = {
    labels: ['Short', 'Medium', 'Long'],
    datasets: [
      {
        label: 'Description Length Distribution',
        data: [shortDescriptions, mediumDescriptions, longDescriptions],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'] // Yellow, Blue, Red colors
      }
    ]
  };

  // Data for Line Chart (Images Over Time, assuming date is related to image upload)
  const dates = store.map(data => data.date);
  const lineData = {
    labels: dates,
    datasets: [
      {
        label: 'Images Over Time',
        data: dates.map(date => store.filter(data => data.date === date).length),
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box width={"100%"} mx="auto" p={4} borderWidth={1} bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Gallery Data Analytics
      </Heading>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
        {/* Bar Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Occurrences by Title
          </Heading>
          <Center>
            <Bar data={barData} />
          </Center>
        </Box>
        {/* Doughnut Chart */}
        <Box mt={10} flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Description Length Distribution
          </Heading>
          <Center>
            <Doughnut data={doughnutData} />
          </Center>
        </Box>
        {/* Line Chart */}
        <Box mt={10} flex="1 1">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Images Over Time
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default GalleryChartTwo;
