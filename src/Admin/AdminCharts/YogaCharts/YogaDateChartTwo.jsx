import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

const YogaDateChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminYogaData);

  useEffect(() => {
    dispatch(getAdminYogaFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    // Initialize arrays to store chart data
    const locations = [];
    const durations = [];
    const prices = [];

    // Extract data from store
    store.forEach(data => {
      locations.push(data.location);
      durations.push(data.duration);
      prices.push(parseInt(data.price)); // Convert price to integer for numerical charts
    });

    // Return data object for each chart
    return {
      locations,
      durations,
      prices
    };
  };

  // Data for Bar Chart (Sessions by Location)
  const barData = {
    labels: prepareData().locations,
    datasets: [
      {
        label: 'Sessions by Location',
        data: prepareData().locations.map(location => store.filter(data => data.location === location).length),
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Doughnut Chart (Distribution by Duration)
  const doughnutData = {
    labels: ['Short', 'Medium', 'Long'],
    datasets: [
      {
        label: 'Duration Distribution',
        data: [
          prepareData().durations.filter(duration => duration.includes('hour')).length,
          prepareData().durations.filter(duration => duration.includes('hours')).length,
          prepareData().durations.filter(duration => duration.includes('days') || duration.includes('weeks')).length
        ],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'] // Yellow, Blue, Red colors
      }
    ]
  };

  // Data for Line Chart (Price Trends)
  const lineData = {
    labels: prepareData().locations,
    datasets: [
      {
        label: 'Price Trends',
        data: prepareData().prices,
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box  width={"100%"} mx="auto"  p={4} borderWidth={1}  boxShadow="lg" bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Yoga Session Analytics
      </Heading>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
        {/* Bar Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Sessions by Location
          </Heading>
          <Center>
            <Bar data={barData} />
          </Center>
        </Box>
        {/* Doughnut Chart */}
       
        {/* Line Chart */}
        <Box mt={10}  flex="1 1 ">
          
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>


        <Box  mt={10}  flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Duration Distribution
          </Heading>
          <Center>
            <Doughnut data={doughnutData} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default YogaDateChartTwo;
