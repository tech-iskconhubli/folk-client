import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

// Register necessary components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const TripsDateChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminTripsData);

  useEffect(() => {
    dispatch(getAdminYogaFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    // Initialize arrays to store chart data
    const tripNames = [];
    const durations = [];
    const prices = [];

    // Extract data from store
    store.forEach(data => {
      tripNames.push(data.tripName);
      durations.push(data.toDate && data.fromDate ? (new Date(data.toDate) - new Date(data.fromDate)) / (1000 * 60 * 60 * 24) : 0); // Calculate duration in days
      prices.push(parseFloat(data.price)); // Convert price to float for numerical charts
    });

    // Return data object for each chart
    return {
      tripNames,
      durations,
      prices
    };
  };

  // Data for Bar Chart (Trips by Trip Name)
  const barData = {
    labels: prepareData().tripNames,
    datasets: [
      {
        label: 'Trips by Trip Name',
        data: prepareData().tripNames.map(tripName => store.filter(data => data.tripName === tripName).length),
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Doughnut Chart (Distribution by Duration)
  const doughnutData = {
    labels: ['Short (0-3 days)', 'Medium (4-7 days)', 'Long (8+ days)'],
    datasets: [
      {
        label: 'Duration Distribution',
        data: [
          prepareData().durations.filter(duration => duration <= 3).length,
          prepareData().durations.filter(duration => duration > 3 && duration <= 7).length,
          prepareData().durations.filter(duration => duration > 7).length
        ],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'] // Yellow, Blue, Red colors
      }
    ]
  };

  // Data for Line Chart (Price Trends)
  const lineData = {
    labels: prepareData().tripNames,
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
    <Box width={"100%"} mx="auto" p={4} borderWidth={1} boxShadow="lg" bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Trips Analytics
      </Heading>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
        {/* Bar Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Trips by Trip Name
          </Heading>
          <Center>
            <Bar data={barData} />
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
        {/* Line Chart */}
        <Box mt={10} flex="1 1 ">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Price Trends
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default TripsDateChartTwo;
