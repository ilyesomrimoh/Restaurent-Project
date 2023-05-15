import OrderBtn from './OrderBtn'
function OrderCard({OrderId , items , OrderPrice , status , OrderDate , OderTime , Address , UserPhone  , Name}) {

  return (
    <div className={`order-card order-card-${status.toLowerCase()} relative flex flex-col w-[90%] px-12 justify-center py-8 rounded-xl bg-white shadow-lg`}>
        <div className="info flex justify-between items-center">
            <p className='text-[var(--gray-color)] font-semibold'>ORDER ID - <span className='text-[var(--primary-color)]'>#{OrderId}</span></p>
            <div className='details flex justify-between items-start basis-2/4'>
                <p className='text-[var(--gray-color)]'>ORDER DATE - <span className='text-[var(--font-color)]'>{OrderDate}, {OderTime}</span></p>
                <OrderBtn text="Pending" colorVar={"--white-color"} bgColorVar={"--primary-ghost"}/>

            </div>
        </div>
        <div className="items flex justify-between items-center mt-7">
            <div className="firstPart flex justify-start gap-14 items-center basis-2/5">
                <div className="imgs rounded-full w-12 ml-9">
                    <img className='w-full'  src={items[0].img} alt="order" />
                </div>
                <div>
                    <p className='text-[var(--gray-color)] font-semibold'>{items[0].name} +{items.length} <span className='text-[var(--font-color)] font-semibold ml-5 cursor-pointer'> More</span></p>
                </div>
                
            </div>
            <div className="secondPart">
                <p className='text-[var(--gray-color)] font-bold'>User Contact <span className='mx-2'>-</span> <span className=' text-[var(--font-color)] font-medium'>{UserPhone}</span></p>
            </div>
        </div>
        <div className="linee m-auto w-[95%] h-[1.5px] mt-7 mb-5  bg-[var(--font-color)]"></div>
        <div className="price-btns flex justify-between   items-center">
            <p className='text-[var(--font-color)] tracking-tight font-bold text-xl'>Order Price - <span className='text-[var(--primary-color)] font-semibold'>{OrderPrice}</span></p>
            <div className='flex justify-center items-center gap-4'>
                <OrderBtn text="Cancel" colorVar={"--font-color"} bgColorVar={"--white-color"}/>
                <OrderBtn text="Confirm" colorVar={"--white-color"} bgColorVar={"--primary-color"} px={"15px"} py={"9px"}/>
            </div>
        </div>
    </div>
  )
}

export default OrderCard