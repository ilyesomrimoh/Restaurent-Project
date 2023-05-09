import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function Sidebar() {
    const {user} = useContext(UserContext);
  return (
    //tailwind class to make a sidebar container
    <div id='sidebar' className="w-64 bg-[var(--primary-color)] text-white p-4">
        <div className='profile'>
            <div className="prof-img m-auto w-[100px]">
                <img src="./images/icons/avatar.png" className="w-full" alt="" />
            </div>
            <div className="prof-info text-center">
                <h6 className='text-2xl'>Your name</h6>
                <p className='text-xs'>{ user && user.email}</p>
            </div>
        </div>
        <ul className='text-white !important'>
            <li><Link to="#" className="block py-2 ">Item 1</Link></li>
            <li><Link to="#" className="block py-2">Item 2</Link></li>
            <li><Link to="#" className="block py-2">Item 3</Link></li>
        </ul>
  </div>
    

  )
}

export default Sidebar