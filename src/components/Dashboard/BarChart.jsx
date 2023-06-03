import React from 'react'
import { UserContext } from '../../contexts/UserContext';
import { useContext , useEffect } from 'react';
import { Chart as chartJs } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
const BarChart = () => {

    let max = 0;
    const {orders} = useContext(UserContext)
    const [chartData, setChartData] = useState({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Total Income',
            fill:true,
            backgroundColor: '#ff9e86b5',
            borderColor: '#d0431c',
            borderWidth: 2,
            hoverBackgroundColor: '#FF9F86',
            hoverBorderColor: '#BA2417',
            data: [],
          },
        ],
      });


 // to get the current week
    const currentDate = new Date();
    const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);



 const updateChartData = (max) => {

  if (orders && !(orders.length === 0)) {
  // get orders of the curent week that are completed
  let weeklyOrders = orders.filter(order => {
    const orderDate = new Date(order.createdDate?.seconds * 1000);
    return orderDate >= firstDayOfWeek.getTime() && orderDate.getTime() <= lastDayOfWeek.getTime() && order.status ==='completed';
  });

  // // get the data for the bar chart
// get the data for the bar chart
const getWeeklyOrdersData = (max) => {
    let weeklyOrdersNumber = [0, 0, 0, 0, 0, 0, 0]; // daily Orders

    weeklyOrders.forEach(order => {
      const dayOfWeek = new Date(order.createdDate?.seconds * 1000).getDay(); // Get the day of the week (0-6)
      weeklyOrdersNumber[dayOfWeek] += 1; // Add the order to the corresponding day
    });

   max = Math.max(...weeklyOrdersNumber) + 10;
   console.log('tesssssst '+ max);
    return weeklyOrdersNumber;
  };
  


    setChartData({
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Total Income',
          fill:true,
          backgroundColor: '#ff9e86b5',
          borderColor: '#d0431c',
          borderWidth: 2,
          hoverBackgroundColor: '#FF9F86',
          hoverBorderColor: '#BA2417',
          data: getWeeklyOrdersData(max),
        },
      ],
    });
  }

}


    useEffect(() => {
        updateChartData(max);
      }, [orders]);

    const options = {
        y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Adjust the step size between ticks here
              min: 0, // Adjust the minimum value of the y-axis here
              max: 100, // Adjust the maximum value of the y-axis here
            },
            suggestedMax: 20,
          },
        datasets: {
          bar: {
            barThickness: 40,
          },
        },
      };

  return (

    <Bar  data={chartData}  options={options}/>
  )
}

export default BarChart
