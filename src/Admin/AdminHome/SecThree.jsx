import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { getAdminMindControlFormData } from '../../Redux/app/action';
import { Bar, Bubble, Line } from 'react-chartjs-2';
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

const SecThree = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminMindControlData);

  useEffect(() => {
    dispatch(getAdminMindControlFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    const dates = [];
    const titles = [];
    const descriptions = [];

    store.forEach(data => {
      if (data.date) dates.push(data.date);
      if (data.title) titles.push(data.title);
      if (data.description) descriptions.push(data.description);
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
        backgroundColor: '#FF6384', // Red color
        borderColor: 'rgba(255, 99, 132, 0.6)',
        borderWidth: 1
      }
    ]
  };

  // Data for Bubble Chart (Distribution by Title Length and Description Length)
  const bubbleData = {
    labels: prepareData().titles,
    datasets: [
      {
        label: 'Title and Description Length Distribution',
        data: prepareData().titles.map((title, index) => ({
          x: title?.length || 0, // x-axis: length of title (fallback to 0 if undefined)
          y: prepareData().descriptions[index]?.length || 0, // y-axis: length of description (fallback to 0 if undefined)
          r: (title?.length || 0) * 2 // bubble size based on title length (multiplied for visual impact)
        })),
        backgroundColor: '#36A2EB', // Blue color
        borderColor: 'rgba(54, 162, 235, 0.6)',
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
        data: prepareData().descriptions.map(description => description?.length || 0), // fallback to 0 if undefined
        fill: false,
        borderColor: '#4BC0C0', // Teal color
        borderWidth: 2,
        pointBackgroundColor: '#4BC0C0',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4BC0C0'
      }
    ]
  };

  return (
    <Box width={"100%"} border={"2px solid transparent"} height={"400px"} mx="auto" p={2} borderWidth={1} bg="white">
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {/* Bar Chart */}
        <GridItem mt={"40px"} colSpan={[2, 2, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Blogs by Date
          </Heading>
          <Center>
            <Bar data={barData} />
          </Center>
        </GridItem>
        {/* Line Chart */}
        <GridItem mt={"40px"} colSpan={[4, 4, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Description Length Trends
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </GridItem>
        {/* Bubble Chart */}
        <GridItem colSpan={[4, 4, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Title and Description Length Distribution
          </Heading>
          <Center>
            <Bubble data={bubbleData} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecThree;
