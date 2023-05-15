import React from 'react'
import UserNav from './UserNav'

const NavBar = () => {
  return (
    <div className='w-full p-5 bg-white h-14 flex justify-between items-center sticky top-0 z-20'>
        <div></div>
      < UserNav img="/images/icons/avatar.png" />
    </div>
  )
}

export default NavBar