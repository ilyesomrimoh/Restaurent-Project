import React from 'react'
import FoodCard from './FoodCard'
import NavBar from './NavBar'
import { useState } from 'react'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='w-full mb-20 h-fit'>
      <NavBar />
      <h2 className='font-bold m-4 mb-7'>Menu</h2>
    <div className='flex justify-around items-center m-10 gap-3'>
      <div></div>
      <div className="flex  w-1/2 relative min-w-[400px]">
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0  w-[130px] lg:w-36 z-10 inline-flex items-center py-2 px-4  text-xs lg:text-sm font-medium text-center text-gray-900 border-gray-300 bg-gray-100 border  rounded-l-lg    " type="button" onClick={toggleMenu} >All categories <img  className="w-4 h-4 ml-1 -rotate-90" src="/images/icons/icons8-less-than-100 (2).png" alt="" /> </button>
        {showMenu && ( <DropDown /> )}
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  outline-none " placeholder="Search Products ..." required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[var(--primary-color)] rounded-r-lg border border-[var(--primary-color)] hover:brightness-95 outline-none ">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </div>
    </div>
<Link to="/dashboard/addproduct"><button type="button" className="text-[var(--primary-color)] text-white border  bg-[var(--green-color)]  font-medium rounded-lg text-sm px-4 py-2 text-center ">Add New item</button>
</Link>    
</div>
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit gap-5 gap-y-10 ml-auto mr-auto'>
      < FoodCard />
      < FoodCard />
      < FoodCard />
      < FoodCard />
      < FoodCard />
      < FoodCard />
      < FoodCard />
      < FoodCard />
    </div>
    </div>
  )
}

export default Menu
