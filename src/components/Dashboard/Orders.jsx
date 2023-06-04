import   { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import OrderCard from './OrderCard'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const {orders, restau ,complOrd , canceledOrd ,activeOrd , pendingOrd} = useContext(UserContext);
  let [finalOrders , setFinalOrders] = useState(orders);
  const [status, setStatus] = useState('all');


  const handleTabClick = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    let filteredOrders = [];

    switch (status) {
      case 'all':
        filteredOrders = orders;
        break;
      case 'pending':
        filteredOrders = orders.filter((order) => order.status === 'pending');
        break;
      case 'active':
        filteredOrders = orders.filter((order) => order.status === 'active');
        break;
      case 'completed':
        filteredOrders = orders.filter((order) => order.status === 'completed');
        break;
      case 'canceled':
        filteredOrders = orders.filter((order) => order.status === 'canceled');
        break;
      default:
        filteredOrders = orders;
        break;
    }

    setFinalOrders(filteredOrders);
  }, [orders, status]);

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
      <h2 className='font-bold m-4 mb-7'>Orders</h2>
      
    <div className="tabs flex justify-start items-center gap-5 ml-8 mb-8">
    <div  className={`tab ${status === 'all' ? 'active-tab' : ''}`} onClick={()=> handleTabClick('all')  }>All ({activeOrd +pendingOrd +activeOrd +canceledOrd +complOrd})</div>
        <div className={`tab ${status === 'pending' ? 'active-tab' : ''}`}        onClick={()=> handleTabClick('pending')  }>Pending Orders ({pendingOrd})</div>
        <div className={`tab ${status === 'active' ? 'active-tab' : ''}`}         onClick={()=>handleTabClick('active') }>Active Orders ({activeOrd})</div>
        <div  className={`tab ${status === 'completed' ? 'active-tab' : ''}`}         onClick={()=>handleTabClick('completed') }>Completed Orders ({complOrd})</div>
        <div  className={`tab ${status === 'canceled' ? 'active-tab' : ''}`}         onClick={()=>handleTabClick('canceled')}>Canceled Orders ({canceledOrd})</div>

     </div>
     <div className="ml-3 flex-wrap orders flex gap-4 items-center justify-center">
          {finalOrders.length === 0 ? (<div className="mt-8 text-xl m-auto">No Orders Yet </div>) : finalOrders.map((order) => (
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
