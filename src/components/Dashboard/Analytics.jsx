import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import RecentComment from './RecentComment'
const Analytics = () => {
  return (
    <div className=' w-full'>
      < NavBar />
      <h2 className='font-bold m-4 mb-7'>Dashboard</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-3 w-fit mr-auto ml-auto flex-wrap pl-6">
     <OverviewCard title="Completed Orders" content="320"  />
      <OverviewCard title="Total Income" content="43000"  />
      <OverviewCard title="Active Orders" content="12 "  />
      <OverviewCard title="canceled Orders" content="0"  />
     </div>
     <div className="chart">
     </div>
      <h3 className='text-xl font-bold ml-8  mb-5'>Recent Rating</h3>
      <div className="comments ml-9">
      <RecentComment  username ='ilyes'  starsnumber = {4}  desc = 'lorem ilyes m o mohammed haddad omri haythem hadjo abdou bal bal bal'  halfstar = {true} />
      </div>
    </div>
  )
}

export default Analytics
