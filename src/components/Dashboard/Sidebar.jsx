import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Side_Bar_Btn from './Side_Bar_Btn'


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
        <ul className='text-white !important w-full flex justify-center items-start flex-col mt-20 '>
            <li><Link to="#"><Side_Bar_Btn title="Dashboard" img="./images/icons/icons8-laptop-metrics-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="#" className="block py-2"><Side_Bar_Btn title="Orders" img="./images/icons/icons8-shopping-bag-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="#" className="block py-2"><Side_Bar_Btn title="Menu" img="./images/icons/icons8-restaurant-menu-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="#" className="block py-2"><Side_Bar_Btn title="Profile" img="./images/icons/icons8-account-100.png" img_alt="test" /></Link></li>

        </ul>
  </div>
    

  )
}

export default Sidebar