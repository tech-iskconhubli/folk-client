import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Line } from 'react-chartjs-2';
import { Box, Center, Heading } from '@chakra-ui/react';

const BlogsLineChart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminBlogsData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Map the store data to extract dates and description lengths
  const dates = store.map(data => data.date);
  const descriptionLengths = store.map(data => data.description.length);

  // Calculate the number of blogs per date
  const blogsPerDate = dates.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const uniqueDates = [...new Set(dates)];

  const data = {
    labels: uniqueDates,
    datasets: [
      {
        label: 'Number of Blogs',
        data: uniqueDates.map(date => blogsPerDate[date]),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for number of blogs
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        yAxisID: 'y1'
      },
      {
        label: 'Description Length',
        data: descriptionLengths,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)', // Blue color for description lengths
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        yAxisID: 'y2'
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
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Number of Blogs',
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
      },
      y2: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Description Length',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        ticks: {
          stepSize: 10,
          font: {
            size: 12
          }
        },
        grid: {
          drawOnChartArea: false
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

export default BlogsLineChart;
