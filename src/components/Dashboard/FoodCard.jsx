import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


const FoodCard = ({data, deleteHandler}) => {
    let {id, name, price, category, description, photoId, available } = data;
    if (photoId === ""){
        photoId = "/images/Assets/food.jpg"
    }
    const [showDrop, setShowDrop] = useState(false);
    const toggleDrop = () => setShowDrop(!showDrop);

    function getFirst15Words(str) {
        const words = str.trim().split(' ');
              return words.slice(0, 15).join(' ') + ' . . . .';
      }
    
  return (
   
<div className="w-[250px] h-[380px]  bg-white border  rounded-xl shadow  relative">
<div className="flex  justify-end w-full px-4 pt-4 absolute z-10">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-white hover:bg-white  hover:text-[var(--primary-color)] focus:ring-4 focus:outline-none focus:ring-white rounded-lg  p-1" type="button" onClick={toggleDrop}>
            <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        {showDrop && ( <div id="dropdown" className="z-10 absolute top-[58px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
<Link to="/dashboard/editproduct"><div className="block px-4 py-2 text-sm   hover:bg-[var(--primary-color)]  hover:text-white">Edit</div></Link></li>
            <li>
               <div  className=" cursor-pointer block px-4 py-2 text-sm   hover:bg-[var(--primary-color)]  hover:text-white">Export Data</div></li>
            <li>
               <div className="cursor-pointer block px-4 py-2 text-sm  hover:bg-[var(--primary-color)]  hover:text-white text-red-600" onClick={()=> {toggleDrop() ;deleteHandler(id)}}>Delete</div></li>
            </ul>
        </div>)}
    </div>
    
        <img className='h-44 w-72 bg-cover rounded-t-xl brightness-75'  src={photoId}  alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 ">{name} <span className=' text-sm font-normal text-[var(--primary-color)] ml-1'>{category}</span></h5>

        <div className='flex gap-4 items-center mb-1 justify-between'>
        <p className='text-[var(--caution-color)] font-semibold text-lg mb-1'>{price}.00 DZD</p>
<Link to="/dashboard/editproduct"><button type="button" className="text-[var(--primary-color)] hover:text-white border border-[var(--primary-color)] hover:bg-[var(--primary-color)]  font-medium rounded-lg text-sm px-4 py-[3px] text-center ">Edit</button></Link>        </div>
        <p className="mb-3 font-normal text-[13px] text-gray-400">{getFirst15Words(description)}</p>
     
    </div>
</div>

  )
}

export default FoodCard
