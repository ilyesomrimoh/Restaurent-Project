import React from 'react'

const Side_Bar_Btn = ({title,img , img_alt}) => {
  return (

    <div className=" side-bar-btn flex gap-4 justify-start items-center p-3 w-44 h-10 rounded-xl">
      <img className='w-6' src={img} alt={img_alt}/>
      <h2  className='text-lg font-semibold tracking-wide ' >{title}</h2>
    </div>

  )
}

export default Side_Bar_Btn
