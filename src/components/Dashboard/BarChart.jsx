import React from 'react'

import { Chart as chartJs } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { orders } from '../../Data';
import { useState } from 'react';

const BarChart = () => {
// to get the current week
    const currentDate = new Date();
    const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);







// get the data for the bar chart
const getWeeklyIncomeData = () => {
    const weeklyIncome = [0, 0, 0, 0, 0, 0, 0]; // daily totals
  // to check if the order is in the curent week

    weeklyOrders.forEach(order => {
      const dayOfWeek = new Date(order.order.createdDate?.seconds * 1000).getDay(); // Get the day of the week (0-6)
      weeklyIncome[dayOfWeek] += order.income; // Add the income to the corresponding day
    });
  
    return weeklyIncome;
  };













    const [userData, setUserData] = useState({
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: orders.map( order => {        
        const date = new Date(order.date);
        const day = date.getDay();
        console.log(day)
        return day;
        })
    });
    orders.map(order=>console.log(order.date))
  return (

    <Bar  data={userData} />
  )
}

export default BarChart
