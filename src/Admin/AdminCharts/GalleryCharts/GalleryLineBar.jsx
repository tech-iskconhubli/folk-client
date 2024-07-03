import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Line } from 'react-chartjs-2';
import { Box, Heading, Center } from '@chakra-ui/react';

const GalleryLineChart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminGalleryData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Map the store data to extract dates and titles
  const dates = store.map(data => data.date);
  const titles = store.map(data => data.title);

  // Count occurrences of each title by date
  const titleCounts = {};
  store.forEach(data => {
    if (!titleCounts[data.date]) {
      titleCounts[data.date] = {};
    }
    if (!titleCounts[data.date][data.title]) {
      titleCounts[data.date][data.title] = 0;
    }
    titleCounts[data.date][data.title]++;
  });

  const uniqueDates = [...new Set(dates)].sort();
  const uniqueTitles = [...new Set(titles)];

  const datasets = uniqueTitles.map(title => {
    return {
      label: title,
      data: uniqueDates.map(date => titleCounts[date] ? titleCounts[date][title] || 0 : 0),
      fill: false,
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`, // Random color for each title
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
    };
  });

  const data = {
    labels: uniqueDates,
    datasets
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
        type: 'linear',
        title: {
          display: true,
          text: 'Occurrences',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        ticks: {
          stepSize: 1,
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <Box width={'100%'} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
      <Center>
        <Line data={data} options={options} />
      </Center>
    </Box>
  );
};

export default GalleryLineChart;
