import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { getAdminSecretFormData } from '../../Redux/app/action';
import { Bar, Radar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, RadialLinearScale } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const SecOne = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminSecretData);

  useEffect(() => {
    dispatch(getAdminSecretFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    const dates = [];
    const titles = [];
    const descriptions = [];

    store?.forEach(data => {
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
        backgroundColor: '#c2185b' // Red color
      }
    ]
  };

  // Data for Radar Chart (Distribution by Title Length)
  const radarData = {
    labels: ['Short Title', 'Medium Title', 'Long Title'],
    datasets: [
      {
        label: 'Title Length Distribution',
        data: [
          prepareData().titles.filter(title => title?.length < 10)?.length,
          prepareData().titles.filter(title => title?.length >= 10 && title?.length < 20)?.length,
          prepareData().titles.filter(title => title?.length >= 20)?.length
        ],
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)'
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
        borderColor: '#304ffe' // Teal color
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
        {/* Radar Chart */}
        <GridItem  colSpan={[2, 2, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Title Length Distribution
          </Heading>
          <Center>
            <Radar  data={radarData} />
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
      </Grid>
    </Box>
  );
};

export default SecOne;
