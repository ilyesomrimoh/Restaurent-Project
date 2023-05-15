import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import SideBarBtn from './SideBarBtn'
function Sidebar() {
    const {user} = useContext(UserContext);
    
    const {logOut } = useContext(UserContext);
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    //tailwind class to make a sidebar container
    <div id='sidebar' className={`${open ? 'w-64' : 'w-20'} sticky top-0 transitio-all duration-150  bg-[var(--primary-color)] text-white p-2  flex flex-col justify-between`}>
        <div onClick={()=> handleOpen()} className='p-2 cursor-pointer w-12  rounded-[50%]'>
            <img src={`${open ? '/images/icons/less-than.png' : '/images/icons/more-than.png'}`} alt="close open icon" />
        </div>
        <div className='profile mt-12'>
            <div className={`prof-img m-auto ${open ? 'w-[100px]' : 'w-[50px]'}`}>
                <img  src="/images/icons/avatar.png" className="w-full" alt="" />
            </div>
            <div className={`prof-info text-center ${open ? '' : 'hidden'}`}>
                <h6 className='text-2xl'>{ user && user.displayName}</h6>
                <p className='text-xs'>{ user && user.email}</p>
            </div>
        </div>
        <ul className='text-white !important w-full flex justify-center items-center flex-col mt-20 '>
            <li><Link to="/dashboard"><SideBarBtn opn={open} title="Dashboard" img="/images/icons/icons8-laptop-metrics-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="/dashboard/orders" ><SideBarBtn opn={open} title="Orders" img="/images/icons/icons8-shopping-bag-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="/dashboard/menu" ><SideBarBtn opn={open} title="Menu" img="/images/icons/icons8-restaurant-menu-100 (1).png" img_alt="test" /></Link></li>
            <li><Link to="/dashboard/profile" ><SideBarBtn opn={open} title="Profile" img="/images/icons/icons8-account-100.png" img_alt="test" /></Link></li>

        </ul>
        <div className='mt-8 mb-6 flex justify-center p-1' onClick={()=> {logOut()}}>
        <SideBarBtn opn={open} title="Logout" img="/images/icons/icons8-logout-100.png" img_alt="test"  />

        </div>
  </div>
    

  )
}

export default Sidebar