import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../../Redux/app/action';
import { Line } from 'react-chartjs-2';
import { Box, Center } from '@chakra-ui/react';

const ResidencyLineChart = () => {
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
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for fee amount data
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        yAxisID: 'y1'
      },
      {
        label: 'Availability Count',
        data: availabilityCounts,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)', // Blue color for availability count data
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
          text: 'Fee Amount ($)',
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
          text: 'Availability Count',
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

export default ResidencyLineChart;
