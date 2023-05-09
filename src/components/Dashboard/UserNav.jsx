import React from 'react'
import { useState } from 'react';

const UserNav = ({img , username}) => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='flex items-center gap-3 relative'>
      {/* icon */}
        <img  className='w-8 shadow-xl  rounded-full' src={img} alt="" />
       <div className='flex items-center gap-1 cursor-pointer' onClick={toggleMenu}  >
       <h4>{username}</h4>
        <img className=' arrow w-4 -rotate-90   left-1' src="./images/icons/icons8-less-than-100 (2).png" alt=""   />
       </div>
       {showMenu && (
        <div className="absolute z-10 w-32 py-2 mt-2 bg-white shadow-xl top-10">
          <p className='p-1'>123</p>
          <div className='w-28 ml-auto mr-auto h-[1px] bg-black'></div>
          <p className='p-1'>123</p>
        </div>
      )}
    </div>
  )
}

export default UserNav
