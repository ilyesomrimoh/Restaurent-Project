import Testimonial from './Testimonial'


function Testmonials() {
  

  return (
    <section id='testimonials' >
        <div className="container">
        <h3>Testimonials About Us</h3>
        <div className="line"></div>
        <p className='head-text'>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis </p>
        <div className="testimonials-slider">
            <div className="previous"></div>
            <div className="next"></div>
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'ILYES HADDAD'
                        location = 'New York'
                        imgSrc = './images/testimonials/photoportrait.png'
                        imgAlt = 'Testimonial 1'
            />
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'ILYES HADDAD'
                        location = 'New York'
                        imgSrc = './images/testimonials/photoportrait.png'
                        imgAlt = 'Testimonial 1'
            />
            <Testimonial desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis'
                        author = 'ILYES HADDAD'
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