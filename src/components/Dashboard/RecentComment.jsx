import React from 'react'

const RecentComment = ({username , starsnumber , desc ,halfstar }) => {

    const starArray = [];

    for (let i = 0; i < starsnumber; i++) {
        starArray.push(<img  className='w-4' key={i} src="/images/icons/icons8-star-100.png" alt="Star" />);
    }
    if (halfstar) {
        starArray.push(<img className='w-4' key={starsnumber + 1} src="/images/icons/icons8-star-half-empty-100.png" alt="Half Star" />);
    }


  return (
    <div className='bg-white w-96 h-32 rounded-lg p-6  '>
      <div className='flex items-center justify-start gap-3'>
        <h4 className='font-bold text-black'>{username}</h4>
        <div className="starts  flex ">{starArray}</div>
        </div>
      <p className='mt-2 text-[var(--gray-color)] ml-2'>{desc}</p>
    </div>
  )
}

export default RecentComment
