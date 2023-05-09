import React from 'react'

const UserNav = ({img , username}) => {
  return (
    <div className='flex items-center gap-3 '>
      {/* icon */}
        <img  className='w-8 shadow-xl  rounded-full' src={img} alt="" />
       <div className='flex items-center gap-1'>
       <h4>{username}</h4>
        <img className='w-4 -rotate-90' src="./images/icons/icons8-less-than-100 (2).png" alt="" />
       </div>
    </div>
  )
}

export default UserNav
