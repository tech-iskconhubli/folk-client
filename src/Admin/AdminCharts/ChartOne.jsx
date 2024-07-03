import React from 'react'
import { Chart as ChartJs } from 'chart.js/auto';
import {Bar,Doughnut,Line} from "react-chartjs-2"
import { Box } from '@chakra-ui/react';
const ChartOne = () => {
    const formData = [
        
            {
              "date": "2024-07-02",
              "time": "10:00 AM",
              "duration": "2 hours",
              "location": "New York, NY",
              "description": "Morning yoga session in Central Park.",
              "price": "20"
            },
            {
              "date": "2024-07-03",
              "time": "2:00 PM",
              "duration": "1.5 hours",
              "location": "Los Angeles, CA",
              "description": "Afternoon meditation and mindfulness.",
              "price": "25"
            },
            {
              "date": "2024-07-04",
              "time": "6:00 PM",
              "duration": "1 hour",
              "location": "San Francisco, CA",
              "description": "Evening yoga session with sunset view.",
              "price": "30"
            },
            {
              "date": "2024-07-05",
              "time": "9:00 AM",
              "duration": "3 hours",
              "location": "Chicago, IL",
              "description": "Intensive yoga workshop for beginners.",
              "price": "50"
            },
            {
              "date": "2024-07-06",
              "time": "8:00 AM",
              "duration": "2.5 hours",
              "location": "Austin, TX",
              "description": "Outdoor yoga session by the lake.",
              "price": "40"
            },
            {
              "date": "2024-07-07",
              "time": "11:00 AM",
              "duration": "1 hour",
              "location": "Seattle, WA",
              "description": "Mid-morning yoga for all levels.",
              "price": "20"
            },
            {
              "date": "2024-07-08",
              "time": "5:00 PM",
              "duration": "1.5 hours",
              "location": "Denver, CO",
              "description": "Evening relaxation yoga session.",
              "price": "30"
            },
            {
              "date": "2024-07-09",
              "time": "7:00 AM",
              "duration": "1 hour",
              "location": "Miami, FL",
              "description": "Sunrise yoga on the beach.",
              "price": "35"
            }      
    ]
  return (
    
    <>
        <Box>
            <Bar 
               data={{
                labels:["A","B","C"],
                datasets:[
                    {
                        label:"Revenue",
                        data:[200,300,400]
                    },
                    {
                        label:"Loss",
                        data:[300,400,500]
                    }
                ]
               }}

            />
        </Box>
    </>
  )
}

export default ChartOne