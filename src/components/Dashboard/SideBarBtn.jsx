import React from 'react'

const SideBarBtn = ({title,img , img_alt}) => {
  return (

    <div className="flex gap-4 justify-start items-center p-3 w-44 h-10">
      <img className='w-8' src={img} alt={img_alt}/>
      <h2  className='text-lg font-semibold tracking-wide ' >{title}</h2>
    </div>

  )
}

export default SideBarBtn
