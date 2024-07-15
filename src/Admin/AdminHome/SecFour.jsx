import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { getAdminFestivalsFormData } from '../../Redux/app/action';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecFour = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminFestivals);

  useEffect(() => {
    dispatch(getAdminFestivalsFormData()); // Fetch data when component mounts
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
        data: prepareData().dates.map(date => store.filter(data => data.date === date)?.length),
        backgroundColor: '#FF6384' // Red color
      }
    ]
  };

  // Data for Pie Chart (Distribution by Title Length)
  const pieData = {
    labels: ['Short Title', 'Medium Title', 'Long Title'],
    datasets: [
      {
        label: 'Title Length Distribution',
        data: [
          prepareData().titles.filter(title => title?.length < 10)?.length,
          prepareData().titles.filter(title => title?.length >= 10 && title?.length < 20)?.length,
          prepareData().titles.filter(title => title?.length >= 20)?.length
        ],
        backgroundColor: [
          '#FFCE56', // Yellow
          '#36A2EB', // Blue
          '#FF6384' // Red
        ],
        borderWidth: 1
      }
    ]
  };

  // Data for Line Chart (Descriptions Trends)
  const lineData = {
    labels: prepareData().dates,
    datasets: [
      {
        label: 'Description Length',
        data: prepareData().descriptions.map(description => description?.length),
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box width={"100%"} border={"2px solid transparent"} height={"300px"} mx="auto" p={2} borderWidth={1} bg="white">
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {/* Bar Chart */}
        <GridItem colSpan={[2, 2, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Blogs by Date
          </Heading>
          <Center>
            <Bar data={barData} />
          </Center>
        </GridItem>
        {/* Pie Chart */}
        <GridItem colSpan={[2, 2, 2]} style={{ height: '200px' }}>
          <Heading as="h3" size="sm" textAlign="center">
            Title Length Distribution
          </Heading>
          <Center>
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </Center>
        </GridItem>
        {/* Line Chart */}
        <GridItem colSpan={[4, 4, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Description Length Trends
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecFour;
