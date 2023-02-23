import React from 'react'
import Testimonial from './Testimonial'


function Testmonials() {
  //how to use useRef
  // const ref = useRef(null)
  // useEffect(() => {
  //   console.log(ref.current)
  // }, [])

  return (
    <section id='testimonials' >
        <div className="container">
        <h3>Testimonials About Us</h3>
        <div className="line"></div>
        <p className='head-text'>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis </p>
        <div className="testimonials-slider">
            
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'John Doe'
                        location = 'New York'
                        imgSrc = './images/testimonials/photoportrait.png'
                        imgAlt = 'Testimonial 1'
            />
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'John Doe'
                        location = 'New York'
                        imgSrc = './images/testimonials/photoportrait.png'
                        imgAlt = 'Testimonial 1'
            />
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'John Doe'
                        location = 'New York'
                        imgSrc = './images/testimonials/photoportrait.png'
                        imgAlt = 'Testimonial 1'
            />
            
        </div>



        </div>
    </section>
  )
}

export default Testmonials