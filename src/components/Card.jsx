import React from 'react'

const Card = ({title,content,img, altText}) => {
  return (
    <div className='card'>
      <img src={img} alt={altText} />
      <h3 className='body-large '>{title}</h3>
      <p className='caption'>{content}</p>
    </div>
  )
}

export default Card
