import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Bar } from 'react-chartjs-2';
import { Box, Center } from '@chakra-ui/react';

const TripsBarCart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminTripsData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Map the store data to extract trip names, prices, and number of places of visit
  const tripNames = store.map(data => data.tripName);
  const prices = store.map(data => parseFloat(data.price));
  const placesOfVisitCount = store.map(data => data.placesOfVisit.length);

  const data = {
    labels: tripNames,
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
        label: 'Number of Places of Visit',
        data: placesOfVisitCount,
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
          text: 'Number of Places of Visit'
        },
        ticks: {
          stepSize: 1
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

export default TripsBarCart;
