import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
const Analytics = () => {
  return (
    <div className=' w-full'>
      < NavBar />
      <h2 className='mb-4 font-bold m-4 mb-7'>Dashboard</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-3 w-fit mr-auto ml-auto">
     <OverviewCard title="Completed Orders" content="320"  />
      <OverviewCard title="Total Income" content="43000"  />
      <OverviewCard title="Active Orders" content="12 "  />
      <OverviewCard title="canceled Orders" content="0"  />
     </div>

    </div>
  )
}

export default Analytics
