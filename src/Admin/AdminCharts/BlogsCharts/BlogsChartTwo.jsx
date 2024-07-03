import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getAdminYogaFormData } from '../../../Redux/app/action'; // Adjust path as per your project structure

const BlogsChartTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminBlogsData);

  useEffect(() => {
    dispatch(getAdminYogaFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    const dates = [];
    const titles = [];
    const descriptions = [];

    store.forEach(data => {
      dates.push(data.date);
      titles.push(data.title);
      descriptions.push(data.description);
    });

    return { dates, titles, descriptions };
  };

  // Data for Bar Chart (Blogs by Date)
  const barData = {
    labels: prepareData().dates,
    datasets: [
      {
        label: 'Number of Blogs',
        data: prepareData().dates.map(date => store.filter(data => data.date === date).length),
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Doughnut Chart (Distribution by Title Length)
  const doughnutData = {
    labels: ['Short Title', 'Medium Title', 'Long Title'],
    datasets: [
      {
        label: 'Title Length Distribution',
        data: [
          prepareData().titles.filter(title => title.length < 10).length,
          prepareData().titles.filter(title => title.length >= 10 && title.length < 20).length,
          prepareData().titles.filter(title => title.length >= 20).length
        ],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'] // Yellow, Blue, Red colors
      }
    ]
  };

  // Data for Line Chart (Descriptions Trends)
  const lineData = {
    labels: prepareData().dates,
    datasets: [
      {
        label: 'Description Length',
        data: prepareData().descriptions.map(description => description.length),
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box width={"100%"} mx="auto" p={4} borderWidth={1} bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Blog Analytics
      </Heading>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
        {/* Bar Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Blogs by Date
          </Heading>
          <Center>
            <Bar data={barData} />
          </Center>
        </Box>
        {/* Doughnut Chart */}
        <Box mt={10} flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Title Length Distribution
          </Heading>
          <Center>
            <Doughnut data={doughnutData} />
          </Center>
        </Box>
        {/* Line Chart */}
        <Box mt={10} flex="1 1 300px">
          <Heading as="h3" size="md" mb={0} textAlign="center">
            Description Length Trends
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogsChartTwo;
