import React from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import OrderCard from './OrderCard'
const Orders = () => {
  const itms = [{"img":"/images/icons/avatar.png","name":"Pizza"}]
  return (
    <div className='w-full'>
      < NavBar />
      <h2 className='font-bold m-4 mb-7'>Orders</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16">
     <OverviewCard title="Pending Orders" content="320"  />
      <OverviewCard title="Active Orders" content="43000"  />
      <OverviewCard title="Canceled Orders" content="12"  />
     </div>
     <div className="tabs flex justify-start items-center gap-5 ml-8 mb-8">
        <div className="tab active-tab">Pending Orders</div>
        <div className="tab">Active Orders</div>
        <div className="tab">Canceled Orders</div>
     </div>
     <div className="orders flex flex-col items-center justify-start">
        <OrderCard OrderId={"246963"} OrderDate={"02-05-2023"} OderTime={"18:06"} status={"active"} items={itms} OrderPrice={"2500DA"} UserPhone={"0555132595"}/>
     </div>
    </div>
  )
}

export default Orders
