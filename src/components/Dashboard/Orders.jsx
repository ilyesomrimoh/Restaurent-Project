import   { useContext, useEffect } from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import OrderCard from './OrderCard'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const {orders, restau} = useContext(UserContext)
  const itms = [{"img":"/images/icons/avatar.png","name":"Pizza"}]
  const nav = useNavigate();
  
  const getDate = (order) => {  
    const date = new Date(order.createdDate?.seconds * 1000)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }
  const getHour = (order) => {  
    const date = new Date(order.createdDate?.seconds )
    return `${date.getHours()}:${date.getMinutes()}`
  }
  useEffect(() => {
    if (restau === null) {
      nav('/dashboard/profile')
    }
  }, [restau])

  return (
    <div className='w-full'>
      < NavBar />
      <h2 onClick={()=> console.log(orders[0])} className='font-bold m-4 mb-7'>Orders</h2>
      <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
     <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16">
     <OverviewCard title="Pending Orders" content={restau && restau.pendingOrders}  />
      <OverviewCard title="Active Orders" content={restau && restau.activeOrders}  />
      <OverviewCard title="Canceled Orders" content={restau && restau.canceledOrders}  />
     </div>
    <div className="tabs flex justify-start items-center gap-5 ml-8 mb-8">
        <div className="tab active-tab">Pending Orders</div>
        <div className="tab">Active Orders</div>
        <div className="tab">Canceled Orders</div>
     </div>
     <div className="ml-3 flex-wrap orders flex gap-4 items-center justify-center">
          {orders.length === 0 ? (<div className="mt-8 text-xl m-auto">No Orders Yet </div>) : orders.map((order) => (
            <OrderCard 
            key={order.id} 
            OrderId={order.id} 
            OrderDate={getDate(order)} 
            OderTime={getHour(order)} 
            items={itms} 
            OrderPrice={order.totalPrice} 
            status={order.status || "pending"} 
            UserPhone={order.userPhone}/>))}        

     </div>
    </div>
  )
}

export default Orders
