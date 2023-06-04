import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import SideBarBtn from './SideBarBtn'
import { faUser , faChartSimple , faList , faBurger , faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
    const {user, restau} = useContext(UserContext);
    
    const {logOut } = useContext(UserContext);
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
     
        setOpen(!open)
    }
    const scrolll = ()=> {
        window.scrollTo(0, 0);
    }
  return (
    <div id='sidebar' className={`${open ? 'w-64' : 'w-20'} sticky top-0 transitio-all duration-150  bg-[var(--primary-color)] text-white p-2  flex flex-col justify-between`}>
        <div onClick={()=> handleOpen()} className='p-2 cursor-pointer w-12  rounded-[50%]'>
            <img src={`${open ? '/images/icons/arrow-white.png' : '/images/icons/arrow-white-reverce.png'}`} alt="close open icon" />
        </div>
        <div className='profile mt-12'>
            <div className={`prof-img m-auto rounded-full overflow-hidden  ${open ? 'w-[100px] h-[100px]' : 'h-[50px] w-[50px]'}`}>
                <img  src={restau?.photoId || "/images/icons/avatar.png"} className="w-full" alt="" />
            </div>
            <div className={`prof-info text-center ${open ? '' : 'hidden'}`}>
                <h6 className='text-2xl'>{ restau && restau.name}</h6>
                <p className='text-xs'>{ user && user.email}</p>
            </div>
        </div>

        
        <ul className='text-white !important w-full flex justify-center items-center flex-col mt-10 '>
            <li><Link  to="/dashboard"><SideBarBtn opn={open} title="Dashboard" img={faChartSimple}  /></Link></li>
            <li><Link  to="/dashboard/orders" ><SideBarBtn opn={open} title="Orders" img={faList}  /></Link></li>
            <li><Link  to="/dashboard/menu" ><SideBarBtn opn={open} title="Menu" img={faBurger}   /></Link></li>
            <li><Link  to="/dashboard/profile" ><SideBarBtn opn={open} title="Profile" img={faUser}   /></Link></li> 

        </ul>
        <div className='mt-8 mb-6 flex justify-center p-1' onClick={()=> {logOut()}}>
        <SideBarBtn opn={open} title="Logout" img={faRightFromBracket}  />

        </div>
  </div>
    

  )
}

export default Sidebar