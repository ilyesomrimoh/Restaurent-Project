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
    firstDayOfWeek.setHours(0, 0, 0, 0);
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setHours(23, 59, 59, 999);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  console.log(lastDayOfWeek);
 console.log(firstDayOfWeek);


 const updateChartData = (max) => {

  if (orders && !(orders.length === 0)) {
  // get orders of the curent week that are completed
  let weeklyOrders = orders.filter(order => {
    const orderDate = new Date(order.createdDate?.seconds * 1000);

    return orderDate >= firstDayOfWeek.getTime() && orderDate.getTime() <= lastDayOfWeek.getTime() && order.status ==='completed';
  });
console.log('weekly orders');
console.log( weeklyOrders);
  // // get the data for the bar chart
// get the data for the bar chart
const getWeeklyOrdersData = (max) => {
    let weeklyOrdersNumber = [0, 0, 0, 0, 0, 0, 0]; // daily Orders

    weeklyOrders.forEach(order => {
      const dayOfWeek = new Date(order.createdDate?.seconds * 1000).getDay(); // Get the day of the week (0-6)
      weeklyOrdersNumber[dayOfWeek] += 1; // Add the order to the corresponding day
    });
   max = Math.max(...weeklyOrdersNumber) + 10;
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
          data: getWeeklyOrdersData(),
        },
      ],
    });
  }

}


    useEffect(() => {
        updateChartData();
      }, [orders]);

    const options = {
        y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              min: 0, 
              max: 100, 
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
