import OrderBtn from './OrderBtn'
import { db } from '../../config/firebase_config'
import { doc , updateDoc } from 'firebase/firestore'



function OrderCard({OrderId , items , OrderPrice , status  , OrderDate , OderTime , Address , UserPhone  , Name}) {
    const getColor = (status, ghost=true) => {
        switch (status.trim().toLowerCase()) {
            case "pending":
                return (ghost ? "--primary-ghost" : "--primary-color")
            case "active":
                return (ghost ? "--info-ghost" : "--info-color")
            case "completed":
                return (ghost ? "--green-ghost" : "--green-color")
            default:
                return "--primary-ghost"
        }
    }
    const handleSuspend = () => {     
        const orderRef = doc(db,"Orders",OrderId);
        updateDoc(orderRef,{
            status : "pending"
        });
        //getOrders();
    }
    const handleAccept = () => {
        const orderRef = doc(db,"Orders",OrderId);
        updateDoc(orderRef,{
            status : "active"
        });
        //getOrders();
    }
    const handleComplete = () => {
        const orderRef = doc(db,"Orders",OrderId);
        updateDoc(orderRef,{
            status : "completed"
        });
        //getOrders();
    }
    const handleCancel = () => {
        const orderRef = doc(db,"Orders",OrderId);
        updateDoc(orderRef,{
            status : "canceled"
        });
        //getOrders();
    }
  return (
    <>
        <div className={`order-card order-card-${status.toLowerCase()} mb-7 text-sm relative flex flex-col lg:w-[45%] w-[95%] px-10 justify-center py-8 rounded-xl bg-white shadow-lg`}>
        <div className="info flex justify-between items-center">
            <p className='text-[var(--gray-color)] font-bold '>ID - <span style={{color : `var(${getColor(status,false)})`,}}>#{OrderId}</span></p>
            <div className='details flex justify-between items-center basis-2/4'>
                <p className='text-[var(--gray-color)] font-bold'><span className='text-[var(--font-color)]'>{OrderDate}, {OderTime}</span></p>
                <OrderBtn text={`${status.charAt(0).toUpperCase() + status.slice(1)}`} colorVar={"--white-color"} bgColorVar={getColor(status)}/>
            </div>
        </div>
        <div className="items flex justify-between items-center mt-3">
            <div className="firstPart flex justify-start gap-14 items-center basis-2/5">
                <div className="imgs rounded-full w-12 ">
                    <img className='w-full'  src={items[0].img} alt="order" />
                </div>
                <div>
                    <p className='text-[var(--gray-color)] font-semibold'>{items[0].name} +{items.length} <span className='text-[var(--font-color)] font-semibold ml-5 cursor-pointer'> More</span></p>
                </div>
                
            </div>
            <div className="secondPart">
                <p className='text-[var(--gray-color)] font-bold'>User Contact - <span className=' text-[var(--font-color)] font-medium'>{UserPhone}</span></p>
            </div>
        </div>
        <div className="linee m-auto w-[95%] h-[1.5px] mt-3 mb-5  bg-[var(--font-color)]"></div>
        <div className="price-btns flex justify-between   items-center">
            <p className='text-[var(--font-color)] tracking-tight font-bold text-xl'>Order Price - <span style={{color : `var(${getColor(status, false)})`,}} className='font-semibold'>{OrderPrice}DA</span></p>
            <div className='flex justify-center items-center gap-4'>
                {(status.toLowerCase() !== "completed" && status.toLowerCase() !== "canceled" ) && (status.toLowerCase() === "active" ? (<OrderBtn text="Suspend" colorVar={"--primary-color"} bgColorVar={"--white-color"} handleClick={handleSuspend} />): <OrderBtn handleClick={handleCancel} text="Cancel" colorVar={"--font-color"} bgColorVar={"--white-color"}/>)}
                
                {status.toLowerCase() === "pending" ? <OrderBtn text="Accept" colorVar={"--white-color"} bgColorVar={"--primary-color"} handleClick={handleAccept}/> : (
                    status.toLowerCase() === "active" ? <OrderBtn text="Complete" colorVar={"--white-color"} bgColorVar={"--info-color"} handleClick={handleComplete}/> : null )}
            </div>
        </div>
    </div>  
    </>
  )
}
export default OrderCard