import   { useContext, useEffect } from 'react'
import NavBar from './NavBar'
import OrderCard from './OrderCard'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const {orders, restau ,complOrd , canceledOrd ,activeOrd , pendingOrd} = useContext(UserContext)

  const itms = [{"img":"/images/icons/avatar.png","name":"Pizza"}]
  const nav = useNavigate();
  
  const getDate = (order) => {  
    const date = new Date(order.createdDate?.seconds * 1000)
    let day = date.getDate()
    if (day < 10) { day = `0${day}`}
    let month = date.getMonth() + 1
    if (month < 10) { month = `0${month}`}
    let year = date.getFullYear()

    return `${day}-${month}-${year}`
  }
  const getHour = (order) => {  
    const date = new Date(order.createdDate?.seconds*1000)
    let hours = date.getHours()
    if (hours < 10) { hours = `0${hours}`}
    let minutes = date.getMinutes()
    if (minutes < 10) { minutes = `0${minutes}`}

    return `${hours}:${minutes}`
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
      {/* <h3 className='text-xl font-bold ml-8  mb-5'>Overview</h3>
      <div className="flex gap-6 w-fit mr-auto ml-auto flex-wrap pl-6 mb-16">
     <OverviewCard title="Canceled Orders" src='/images/icons/canceled-red.png' content={restau && restau.canceledOrders}  />
     <OverviewCard title="Pending Orders" src='/images/icons/pending-red.png' content={restau && restau.pendingOrders}  />
      <OverviewCard title="Active Orders" src='/images/icons/active-red.png' content={restau && restau.activeOrders}  />
      <OverviewCard title="Completed Orders" src='/images/icons/completed-red.png' content={restau && restau.completedOrders}  />
     </div> */}
    <div className="tabs flex justify-start items-center gap-5 ml-8 mb-8">
        <div className="tab active-tab">Pending Orders ({pendingOrd})</div>
        <div className="tab">Active Orders ({activeOrd})</div>
        <div className="tab">Completed Orders ({complOrd})</div>
        <div className="tab">Canceled Orders ({canceledOrd})</div>

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
