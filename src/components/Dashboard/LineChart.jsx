import React from 'react'
import { UserContext } from '../../contexts/UserContext';
import { useContext , useEffect} from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as chartJs } from 'chart.js/auto';
import { useState } from 'react';
const LineChart = () => {


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



 const updateChartData = () => {

  if  (orders && !(orders.length === 0)) {
  // get orders of the curent week that are completed
  let weeklyOrders = orders.filter(order => {
    const orderDate = new Date(order.createdDate?.seconds * 1000);
    return orderDate >= firstDayOfWeek.getTime() && orderDate.getTime() <= lastDayOfWeek.getTime() && order.status ==='completed';
  });

  // // get the data for the bar chart
const getWeeklyIncomeData = () => {
   let weeklyIncome = [0, 0, 0, 0, 0, 0, 0]; // daily totals*

    weeklyOrders.forEach(order => {
      const dayOfWeek = new Date(order.createdDate?.seconds * 1000).getDay(); // Get the day of the week (0-6)
      weeklyIncome[dayOfWeek] += parseInt(order.totalPrice); // Add the income to the corresponding day
    });
  
    return weeklyIncome;
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
          data: getWeeklyIncomeData(),
        },
      ],
    });
  }

}


    useEffect(() => {
        updateChartData();
      }, [orders]);




  return (
  <Line data={chartData} />
  )
}

export default LineChart
