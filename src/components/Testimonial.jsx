import React from 'react'

function Testimonial({ desc , author , location , imgSrc, imgAlt}) {
  return (
    <div className='testimonial-card'>
        <div className="testimonial-img">
            <img src={imgSrc || ''} alt={imgAlt} />
        </div>
        <div className="testimonial-text">
            <p>{desc}</p>
            
            <div className="testi-info">
                <h4 className='.body-small red-text'>{author}</h4>
                <p className="caption">{location}</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial