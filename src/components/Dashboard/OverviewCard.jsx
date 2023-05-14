import React from 'react'

const OverviewCard = ({title ,content}) => {
  return (
    <div className='flex justify-between items-center gap-4 bg-white w-72 h-43 rounded-2xl p-5 pb-8 pt-8 shadow-lg transition-transform delay-300 hover:scale-105'>
      <div className='basis-14'><img src="./images/icons/icons8-shopping-bag-100.png" className='w-full' alt="test" />
      </div>
      <div className='flex gap-6  flex-col justify-between'>
          
          <h3 className='text-[var(--gray-color)] text-lg font-semibold '>{title}</h3>
          <p className=' text-4xl text-gray-800 font-bold'>{content}</p>
      </div>

    </div>
  )
} 

export default OverviewCard
