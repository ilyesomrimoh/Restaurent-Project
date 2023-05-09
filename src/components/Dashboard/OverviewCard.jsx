import React from 'react'

const OverviewCard = ({title ,content}) => {
  return (
    <div className='bg-white w-56 h-32 rounded-2xl p-5 flex flex-col justify-between shadow-lg  '>
        <h3 className='text-[var(--gray-color)] text-lg font-semibold '>{title}</h3>
        <p className=' text-4xl  font-bold'>{content}</p>
      
    </div>
  )
}

export default OverviewCard
