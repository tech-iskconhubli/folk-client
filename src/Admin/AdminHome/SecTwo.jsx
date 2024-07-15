import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { getAdminYogaFormData } from '../../Redux/app/action';
import { Scatter, Bubble, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SecTwo = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.adminYogaData);

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

  // Data for Scatter Chart (Custom Trends)
  const scatterData = {
    datasets: [
      {
        label: 'Custom Trends',
        data: prepareData().dates.map((date, index) => ({
          x: date,
          y: prepareData().titles[index]?.length || 0,
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: '#fff',
        borderWidth: 1
      }
    ]
  };

  // Data for Bubble Chart (Title vs Description Length)
  const bubbleData = {
    datasets: [
      {
        label: 'Title vs Description Length',
        data: prepareData().dates.map((date, index) => ({
          x: date,
          y: prepareData().descriptions[index]?.length || 0,
          r: prepareData().titles[index]?.length || 10
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: '#fff',
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
    <Box width={"100%"} border={"2px solid transparent"} height={"400px"} mx="auto" p={2} borderWidth={1} bg="white">
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {/* Scatter Chart */}
        <GridItem colSpan={[4, 4, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Custom Trends
          </Heading>
          <Center>
            <Scatter data={scatterData} />
          </Center>
        </GridItem>
        {/* Bubble Chart */}
        <GridItem mt={"40px"} colSpan={[2, 2, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Title vs Description Length
          </Heading>
          <Center>
            <Bubble data={bubbleData} />
          </Center>
        </GridItem>

        <GridItem mt={"40px"} colSpan={[4, 4, 2]}>
          <Heading as="h3" size="md" textAlign="center">
            Description Length Trends
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </GridItem>
        {/* Line Chart (to be added later) */}
      </Grid>
    </Box>
  );
};

export default SecTwo;
