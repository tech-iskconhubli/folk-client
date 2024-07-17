import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Bar } from 'react-chartjs-2';
import { Box, Heading, Center } from '@chakra-ui/react';

const ResidencyBarCart = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.AppReducer.adminResidencyData);

  useEffect(() => {
    dispatch(getAdminYogaFormData());
  }, [dispatch]);

  // Map the store data to extract residency names, fee amounts, and availability counts
  const residencyNames = store.map(data => data.residencyName);
  const feeAmounts = store.map(data => data.feeAmount);
  const availabilityCounts = store.map(data => data.availabilityStatus.length);

  const data = {
    labels: residencyNames,
    datasets: [
      {
        label: 'Fee Amount ($)',
        data: feeAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 10,
        yAxisID: 'y1'
      },
      {
        label: 'Availability Count',
        data: availabilityCounts,
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
          text: 'Fee Amount ($)'
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
          text: 'Availability Count'
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

export default ResidencyBarCart;
