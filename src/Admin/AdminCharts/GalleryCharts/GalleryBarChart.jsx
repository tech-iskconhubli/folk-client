import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Bar } from 'react-chartjs-2';
import { Box, Heading, Center } from '@chakra-ui/react';

const GalleryBarChart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminGalleryData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Extract titles and count their occurrences
  const titles = store.map(data => data.title);
  const titleCounts = titles.reduce((acc, title) => {
    acc[title] = (acc[title] || 0) + 1;
    return acc;
  }, {});

  const uniqueTitles = Object.keys(titleCounts);
  const counts = Object.values(titleCounts);

  const data = {
    labels: uniqueTitles,
    datasets: [
      {
        label: 'Number of Occurrences',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 10
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
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Occurrences'
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

export default GalleryBarChart;
