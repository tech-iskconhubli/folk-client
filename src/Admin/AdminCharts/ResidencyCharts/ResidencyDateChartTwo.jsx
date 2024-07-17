import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

const ResidencyDateChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminResidencyData);

  useEffect(() => {
    dispatch(getAdminYogaFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    const residencyNames = [];
    const locations = [];
    const feeAmounts = [];
    const availabilityCounts = [];

    store.forEach(data => {
      residencyNames.push(data.residencyName);
      locations.push(data.location);
      feeAmounts.push(parseInt(data.feeAmount));
      availabilityCounts.push(data.availabilityStatus.length);
    });

    return {
      residencyNames,
      locations,
      feeAmounts,
      availabilityCounts
    };
  };

  const data = prepareData();

  // Data for Bar Chart (Sessions by Location)
  const barData = {
    labels: data.locations,
    datasets: [
      {
        label: 'Sessions by Location',
        data: data.locations.map(location => store.filter(d => d.location === location).length),
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Doughnut Chart (Distribution by Availability)
  const doughnutData = {
    labels: data.residencyNames,
    datasets: [
      {
        label: 'Availability Distribution',
        data: data.availabilityCounts,
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'] // Add more colors if needed
      }
    ]
  };

  // Data for Line Chart (Price Trends)
  const lineData = {
    labels: data.residencyNames,
    datasets: [
      {
        label: 'Price Trends',
        data: data.feeAmounts,
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box width={"100%"} mx="auto"  p={4} borderWidth={1}  boxShadow="lg" bg="white">
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
        <Box mt={10} flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Availability Distribution
          </Heading>
          <Center>
            <Doughnut data={doughnutData} />
          </Center>
        </Box>
        {/* Line Chart */}
        <Box mt={10} flex="1 1 300px">
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

export default ResidencyDateChartTwo;
