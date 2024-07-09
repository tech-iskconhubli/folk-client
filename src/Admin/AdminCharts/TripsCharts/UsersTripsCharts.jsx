import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { getTripsFormData, getYogaFormData } from '../../../Redux/app/action';

const UsersTripsChart = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.AppReducer.tripsData);

  useEffect(() => {
    dispatch(getTripsFormData()); // Fetch data when component mounts
  }, [dispatch]);

  // Prepare data for charts
  const prepareData = () => {
    // Initialize arrays to store chart data
    const dates = [];
    const locations = [];
    const durations = [];
    const prices = [];
    const users = {
      names: [],
      watsAppNumbers: [],
      emails: [],
      ages: [],
      collegesOrCompanies: [],
      branchesOrYears: []
    };

    // Extract data from store
    store.forEach(data => {
      dates.push(data.date);
      locations.push(data.location);
      durations.push(data.duration);
      prices.push(parseInt(data.price)); // Convert price to integer for numerical charts

      // Extract user details
      users.names.push(data.name);
      users.watsAppNumbers.push(data.watsAppNumber);
      users.emails.push(data.email);
      users.ages.push(data.age);
      users.collegesOrCompanies.push(data.collageOrCompany);
      users.branchesOrYears.push(data.BranchOfYear);
    });

    // Return data object for each chart
    return {
      dates,
      locations,
      durations,
      prices,
      users
    };
  };

  const preparedData = prepareData();

  // Calculate percentages for college students and employees
  const collegeStudentCount = preparedData.users.branchesOrYears.filter(value => value).length;
  const employeeCount = preparedData.users.branchesOrYears.filter(value => !value).length;
  const totalUsers = preparedData.users.names.length;
  const collegeStudentPercentage = ((collegeStudentCount / totalUsers) * 100).toFixed(2);
  const employeePercentage = ((employeeCount / totalUsers) * 100).toFixed(2);

  // Calculate age distribution
  const ageGroups = {
    '18-25': 0,
    '26-35': 0,
    '36-45': 0,
    '46+': 0
  };
  preparedData.users.ages.forEach(age => {
    if (age >= 18 && age <= 25) ageGroups['18-25']++;
    else if (age >= 26 && age <= 35) ageGroups['26-35']++;
    else if (age >= 36 && age <= 45) ageGroups['36-45']++;
    else if (age >= 46) ageGroups['46+']++;
  });

  const ageDistributionData = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: 'Age Distribution',
        data: Object.values(ageGroups),
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0'] // Yellow, Blue, Red, Teal colors
      }
    ]
  };

  // Data for Line Chart (Sessions by Date)
  const lineData = {
    labels: preparedData.dates,
    datasets: [
      {
        label: 'Sessions by Date',
        data: preparedData.dates.map(date => store.filter(data => data.date === date).length),
        fill: false,
        borderColor: '#4BC0C0' // Teal color
      }
    ]
  };

  return (
    <Box width={"100%"} mx="auto" p={4} borderWidth={1} boxShadow="lg" bg="white">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Trips  Analytics
      </Heading>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
        {/* Line Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={30} textAlign="center">
            Sessions by Date
          </Heading>
          <Center>
            <Line data={lineData} />
          </Center>
        </Box>
        {/* Age Distribution Doughnut Chart */}
        <Box flex="1 1 300px">
          <Heading as="h3" size="md" mb={30} textAlign="center">
            Age Distribution
          </Heading>
          <Center>
            <Doughnut data={ageDistributionData} />
          </Center>
        </Box>
      </Flex>
      {/* User Percentages */}
      <Box mt={20} textAlign="center">
        <Heading as="h3" size="md">
          User Percentages
        </Heading>
        <p>College Students: {collegeStudentPercentage}%</p>
        <p>Employees: {employeePercentage}%</p>
      </Box>
    </Box>
  );
};

export default UsersTripsChart;
