import   { useContext } from 'react'
import OverviewCard from './OverviewCard'
import NavBar from './NavBar'
import OrderCard from './OrderCard'
import { UserContext } from '../../contexts/UserContext'

const Orders = () => {
  const {orders} = useContext(UserContext)

  const itms = [{"img":"/images/icons/avatar.png","name":"Pizza"}]
  
  const getDate = (order) => {  
    const date = new Date(order.createdDate?.seconds * 1000)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }
  const getHour = (order) => {  
    const date = new Date(order.createdDate?.seconds )
    return `${date.getHours()}:${date.getMinutes()}`
  }
  return (
    <div className='w-full'>
      < NavBar />
      <h2 onClick={()=> console.log(orders[0])} className='font-bold m-4 mb-7'>Orders</h2>
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
     <div className="ml-3 flex-wrap orders flex gap-4 items-center justify-center">
          {orders.map((order) => (
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
