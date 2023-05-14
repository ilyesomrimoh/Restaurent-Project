import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
const UserNav = ({img }) => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const {user , logOut} = useContext(UserContext);

  return (
    <div className='flex items-center gap-3 relative'>
      {/* icon */}
        <img  className='w-8 shadow-xl  rounded-full' src={img} alt="" />
       <div className='flex items-center gap-1 cursor-pointer' onClick={toggleMenu}  >
       <h4>{user && user.displayName}</h4>
        <img className=' arrow w-4 -rotate-90   left-1' src="./images/icons/icons8-less-than-100 (2).png" alt=""   />
       </div>
       {showMenu && (
        <div className="absolute z-10 w-52 p-4 mt-2 bg-white shadow-xl top-10 right-3">
          <p className='font-semibold text-[var(--gray-color)] '>Welcome, {user && user.displayName}</p>
          <div className='w-40 ml-auto mt-2 mb-2 mr-auto h-[1px] bg-[var(--gray-color)]'></div>
          <div className='flex justify-start gap-2 items-center pt-2 pb-2'>
            <img className='w-7' src="./images/icons/icons8-male-user-100 (1).png" alt="" />
            <p className=''> Profile</p>
          </div>
          <div className='flex justify-start gap-2 items-center pt-2 pb-2 cursor-pointer ' onClick={()=> {logOut()}}>
            <img className='w-7 pl-1' src="./images/icons/icons8-logout-100 (2).png" alt="" />
            <p className=''> Logout</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserNav
