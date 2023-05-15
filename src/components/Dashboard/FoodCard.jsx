import React from 'react'
import { useState } from 'react';
const FoodCard = () => {
    const [showDrop, setShowDrop] = useState(false);
    const toggleDrop = () => setShowDrop(!showDrop);
  return (
   
<div class="w-72 h-fit h-max-[390px] bg-white border  rounded-xl shadow m-24 relative">
<div class="flex  justify-end w-full px-4 pt-4 absolute z-10">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-white hover:bg-white  hover:text-[var(--primary-color)] focus:ring-4 focus:outline-none focus:ring-white rounded-lg  p-1" type="button" onClick={toggleDrop}>
            <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        {showDrop && ( <div id="dropdown" class="z-10 absolute top-[58px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm   hover:bg-[var(--primary-color)]  hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm   hover:bg-[var(--primary-color)]  hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm  hover:bg-[var(--primary-color)]  hover:text-white text-red-600 ">Delete</a>
            </li>
            </ul>
        </div>)}
    </div>
    <a href="#">
        <img className='h-44 w-72 bg-cover rounded-t-xl' class="rounded-t-lg" src="/images/Assets/food.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions </h5>
        </a>
        <div className='flex gap-4 items-center mb-1'>
        <p className='text-[var(--caution-color)] font-semibold text-lg mb-1'>500.00 dzd</p>
        <button type="button" class="text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-[var(--primary-color)]  font-medium rounded-lg text-sm px-4 py-[3px] text-center    hover:text-white ">Edit</button>
        </div>
        <p class="mb-3 font-normal text-sm text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     
    </div>
</div>

  )
}

export default FoodCard
