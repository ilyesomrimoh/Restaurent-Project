import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import RecentComment from './RecentComment'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import BarChart from './BarChart'
import LineChart from './LineChart'

const Analytics = () => {
  const nav = useNavigate();
  const { restau } = useContext(UserContext);

  useEffect(() => {
    if (restau === null) {
      nav('/dashboard/profile')
    }
  }, [restau])


  return (
    <div className='w-full'>
      < NavBar />
      <h2 className='font-bold m-4 mb-7'>Dashboard</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16 justify-center">

      <OverviewCard title="Total Income"    content={restau && restau.TotalIncome}  />
      <OverviewCard title="Active Orders"   content={restau && restau.activeOrders} />
     <OverviewCard title="Completed Orders" content={restau && restau.completedOrders}  />
      <OverviewCard title="canceled Orders" content={ restau && restau.canceledOrders}  />
     </div>
     <div className="chart flex flex-col lg:flex-row justify-around items-center gap-8 mt-28 mb-12">
      <div className='w-[90%]  lg:w-[45%] lg:h-[450px]'>
      <h3 className='text-xl font-bold ml-8  mb-5'>orders</h3>
         <BarChart />
         </div>
      <div className='w-[90%]  lg:w-[45%] lg:h-[450px]'>
      <h3 className='text-xl font-bold ml-8  mb-5'>Total Income</h3>
         <LineChart /></div>
     </div>
      <h3 className='text-xl font-bold ml-8  mb-5'>Recent Rating</h3>
      <div className=" flex justify-evenly flex-wrap ml-9 mb-20 h-40">
      <RecentComment  username ='ilyes'  starsnumber = {4}  desc = 'lorem ilyes m o mohammed haddad omri haythem hadjo abdou bal bal bal'  halfstar = {true} />
      </div>
    </div>
  )
}

export default Analytics
