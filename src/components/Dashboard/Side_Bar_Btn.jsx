import React from 'react'

const Side_Bar_Btn = ({title,img , img_alt}) => {
  return (

    <div className="flex gap-1 justify-start items-center bg-white border rounded-xl p-3 w-44 h-10">
      <img className='w-6 h-6' src={img} alt={img_alt}/>
      <h2  className='text-lg font-bold ' >{title}</h2>
    </div>

  )
}

export default Side_Bar_Btn
