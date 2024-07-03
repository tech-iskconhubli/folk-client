import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Bar } from 'react-chartjs-2';
import { Box, Heading, Center } from '@chakra-ui/react';

const FestivalsBarCart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminFestivals);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Extract data from the store
  const titles = store.map(data => data.title);
  const prices = store.map(data => parseFloat(data.price) || 0);
  const registeredUsers = store.map(data => data.registeredUsers || 0);

  const data = {
    labels: titles,
    datasets: [
      {
        label: 'Price ($)',
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 10,
        yAxisID: 'y1'
      },
      {
        label: 'Registered Users',
        data: registeredUsers,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        borderRadius: 10,
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
          text: 'Price ($)'
        },
        ticks: {
          stepSize: 10
        }
      },
      y2: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Registered Users'
        },
        ticks: {
          stepSize: 10
        },
        grid: {
          drawOnChartArea: false
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

export default FestivalsBarCart;
