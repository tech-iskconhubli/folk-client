import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

const FestivalsDateChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminFestivals);

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
      durations.push(data.toDate - data.fromDate); // Assuming duration is calculated from toDate - fromDate
      prices.push(parseFloat(data.price)); // Convert price to float for numerical charts
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
    labels: [...new Set(prepareData().locations)],
    datasets: [
      {
        label: 'Sessions by Location',
        data: [...new Set(prepareData().locations)].map(location => store.filter(data => data.location === location).length),
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
          prepareData().durations.filter(duration => duration < 24 * 60 * 60 * 1000).length, // Less than 1 day
          prepareData().durations.filter(duration => duration >= 24 * 60 * 60 * 1000 && duration < 7 * 24 * 60 * 60 * 1000).length, // Between 1 day and 1 week
          prepareData().durations.filter(duration => duration >= 7 * 24 * 60 * 60 * 1000).length // 1 week or more
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
    <Box width={"100%"} mx="auto"  p={4} borderWidth={1}  boxShadow="lg" bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Festival Analytics
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
        {/* Line Chart */}
        <Box mt={10} flex="1 1 ">
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>
        {/* Doughnut Chart */}
        <Box mt={10} flex="1 1 300px">
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

export default FestivalsDateChartTwo;
