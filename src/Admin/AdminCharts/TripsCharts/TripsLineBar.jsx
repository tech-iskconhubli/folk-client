import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Line } from 'react-chartjs-2';
import { Box, Center } from '@chakra-ui/react';

const TripsLineChart = () => {
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
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for price data
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        yAxisID: 'y1'
      },
      {
        label: 'Number of Places of Visit',
        data: placesOfVisitCount,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)', // Blue color for places of visit data
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
          text: 'Price ($)',
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
        }
      },
      y2: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Number of Places of Visit',
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

export default TripsLineChart;
