import Testimonial from './Testimonial'
import {useState, useRef} from 'react'


function Testmonials() {
  const refs = useRef([]);
  const [current , setCurrent] = useState(0)

  const testimonials = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis',
      author : 'ILYES HADDAD',
      location : 'New York',
      imgSrc : './images/testimonials/photoportrait.png',
      imgAlt : 'Testimonial 1'
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis',
      author : 'ILYES HADDAD',
      location : 'New York',
      imgSrc : './images/testimonials/photoportrait.png',
      imgAlt : 'Testimonial 1'
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiisLorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis',
      author : 'ILYES HADDAD',
      location : 'New York',
      imgSrc : './images/testimonials/photoportrait.png',
      imgAlt : 'Testimonial 1'
    }]
    function handleNext() {
      refs.current[current].classList.remove('active');
      if (current+1 === testimonials.length) {
        setCurrent(0);
        refs.current[0].animate([
          // keyframes
          { transform: 'translate(50%, -50%)' ,
          opacity: 0},
          { transform: 'translate(-50%, -50%)',
          opacity: 1 }
        ], {
          // timing options
          duration: 400,
          iterations: 1
        });
        refs.current[0].classList.add('active');

      }else{
        setCurrent( current + 1);
        refs.current[current+1].animate([
          // keyframes
          { transform: 'translate(50%, -50%)' ,
        opacity: 0},
          { transform: 'translate(-50%, -50%)',
          opacity: 1 }
        ], {
          // timing options
          duration: 400,
          iterations: 1
        });
        refs.current[current+1].classList.add('active');
      }
      refs.current[current].animate([
        // keyframes
        { transform: 'translate(-50%, -50%)' ,
      opacity: 1},
        { transform: 'translate(-150%, -50%)',
        opacity: 0 }
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
    }
    function handlePrevious() {
      refs.current[current].classList.remove('active');
      refs.current[current].animate([
        // keyframes
        { transform: 'translate(-50%, -50%)',opacity:1 },
        { transform: 'translate(50%, -50%)' , opacity: 0 }
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      if (current-1 === -1) {
        setCurrent(testimonials.length - 1);
        refs.current[testimonials.length-1].animate([
          // keyframes
          { transform: 'translate(-150%, -50%)' ,
        opacity: 0},
          { transform: 'translate(-50%, -50%)',
          opacity: 1 }
        ], {
          // timing options
          duration: 400,
          iterations: 1
        });
        refs.current[testimonials.length - 1].classList.add('active');


      }else{

      setCurrent(current - 1);
      refs.current[current-1].animate([
        // keyframes
        { transform: 'translate(-150%, -50%)',opacity:0 },
        { transform: 'translate(-50%, -50%)' , opacity: 1 }
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      refs.current[current-1].classList.add('active');
    } 

    }
    
  return (
    <section id='testimonials' >
        <div className="container">
        <h3>Testimonials About Us</h3>
        <div className="line"></div>
        <p className='head-text'>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, officiis adipisicing elit. Explicabo, officiis </p>
        <div className="testimonials-slider">
            <div className="previous" onClick={e => handlePrevious()}></div>
            <div className="next" onClick={e => handleNext()}></div>
            {testimonials.map((testimonial, index) => {
              return (index === 0 ? <Testimonial desc = {testimonial.desc}
                author = {testimonial.author}
                location = {testimonial.location}
                imgSrc = {testimonial.imgSrc}
                imgAlt = {testimonial.imgAlt}
                key = {index}
                active = {true}
                reff = {el => refs.current[index] = el}
/> : <Testimonial desc = {testimonial.desc}
                                  author = {testimonial.author}
                                  location = {testimonial.location}
                                  imgSrc = {testimonial.imgSrc}
                                  imgAlt = {testimonial.imgAlt}
                                  key = {index}
                                  reff = {el => refs.current[index] = el}
              />)
            } )}
            
            
            
        </div>



        </div>
    </section>
  )
}

export default Testmonials