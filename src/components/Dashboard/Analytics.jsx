import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import RecentComment from './RecentComment'

import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Analytics = () => {
  const nav = useNavigate();
  const { restau ,complOrd  ,activeOrd , pendingOrd, reviews} = useContext(UserContext);

  useEffect(() => {
    if (restau === null) {
      nav('/dashboard/profile')
    }
  }, [restau])


  return (
    <div className='w-full '>
      < NavBar />
      <h2 className='font-bold m-4 mb-7'>Dashboard</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16">

      <OverviewCard title="Total Income" src='/images/icons/income.png'   content={restau && restau.TotalIncome}  />
     <OverviewCard title="Pending Orders"src='/images/icons/pending-red.png' content={pendingOrd}  />
      <OverviewCard title="Active Orders"  src='/images/icons/active-red.png' content={activeOrd} />
      <OverviewCard title="Completed Orders" src='/images/icons/completed-red.png' content={ complOrd}  />
     </div>
     <div className="chart">
     </div>
      <h3 className='text-xl font-bold ml-8  mb-5'>Recent Rating</h3>
      <div className="comments ml-9 flex justify-start items-center gap-5 flex-wrap">
        {reviews.length === 0 ? (<div className="mt-8 text-xl m-auto">No Reviews Yet </div>) : reviews.map((rev) => (
            <RecentComment key={rev.id} 
            username ={rev.userName}
            starsnumber = {rev.rating}
            desc = {rev.description}
            halfstar = {(rev?.rating?.toString().split('.').length >= 2)} />))}
      </div>
    </div>
  )
}

export default Analytics
