import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Bar } from 'react-chartjs-2';
import { Box, Heading, Center } from '@chakra-ui/react';

const BlogsBarChart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminBlogsData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Map the store data to extract dates and titles
  const dates = store.map(data => data.date);
  const titles = store.map(data => data.title);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Blog Titles',
        data: titles.map((title, index) => index + 1), // Use index+1 as dummy data to show titles
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 10,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.raw; // Show the actual title as tooltip
            }
            return label;
          }
        }
      }
    },
    scales: {
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Blog Titles (index)'
        },
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <Box width={'100%'} mx="auto" borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
      <Center>
        <Bar data={data} options={options} />
      </Center>
    </Box>
  );
};

export default BlogsBarChart;
