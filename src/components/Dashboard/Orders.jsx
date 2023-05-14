import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'

const Orders = () => {
  return (
    <div className='w-full'>
      < NavBar />
      <h2 className='font-bold m-4 mb-7'>Orders</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16">
     <OverviewCard title="Pending Orders" content="320"  />
      <OverviewCard title="Active Income" content="43000"  />
      <OverviewCard title="Canceled Orders" content="12 "  />
     </div>
    </div>
  )
}

export default Orders
