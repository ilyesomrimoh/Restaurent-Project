import Testimonial from "./Testimonial";
import { useState, useRef } from "react";

function Testmonials() {
  const refs = useRef([]);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      desc: "Tabaki has made my life so much easier. Ordering from their platform is simple and straightforward. Highly recommended!",
      author: "ILYES HADDAD",
      location: "France",
      imgSrc: "./images/testimonials/photoportrait.png",
      imgAlt: "Testimonial 1",
    },
    {
      desc: "The Testimonials About Us section convinced me to give Tabaki a try, and I'm glad I did. The positive reviews were spot on, and my experience was fantastic!",
      author: "ILYES OMRI",
      location: "New York",
      imgSrc: "./images/testimonials/ilys photooo.jpg",
      imgAlt: "Testimonial 2",
    },
    {
      desc: "I was amazed by the speed of delivery from Tabaki. My order arrived in no time, and the products were in perfect condition. Impressive service!",
      author: "SAIDANI HYTHEM",
      location: "Qatar",
      imgSrc: "./images/testimonials/htm photo.jpg",
      imgAlt: "Testimonial 3",
    },
  ];
  function handleNext() {
    refs.current[current].classList.remove("active");
    if (current + 1 === testimonials.length) {
      setCurrent(0);
      refs.current[0].animate(
        [
          // keyframes
          { transform: "translate(50%, -50%)", opacity: 0 },
          { transform: "translate(-50%, -50%)", opacity: 1 },
        ],
        {
          // timing options
          duration: 400,
          iterations: 1,
        }
      );
      refs.current[0].classList.add("active");
    } else {
      setCurrent(current + 1);
      refs.current[current + 1].animate(
        [
          // keyframes
          { transform: "translate(50%, -50%)", opacity: 0 },
          { transform: "translate(-50%, -50%)", opacity: 1 },
        ],
        {
          // timing options
          duration: 400,
          iterations: 1,
        }
      );
      refs.current[current + 1].classList.add("active");
    }
    refs.current[current].animate(
      [
        // keyframes
        { transform: "translate(-50%, -50%)", opacity: 1 },
        { transform: "translate(-150%, -50%)", opacity: 0 },
      ],
      {
        // timing options
        duration: 400,
        iterations: 1,
      }
    );
  }
  function handlePrevious() {
    refs.current[current].classList.remove("active");
    refs.current[current].animate(
      [
        // keyframes
        { transform: "translate(-50%, -50%)", opacity: 1 },
        { transform: "translate(50%, -50%)", opacity: 0 },
      ],
      {
        // timing options
        duration: 400,
        iterations: 1,
      }
    );
    if (current - 1 === -1) {
      setCurrent(testimonials.length - 1);
      refs.current[testimonials.length - 1].animate(
        [
          // keyframes
          { transform: "translate(-150%, -50%)", opacity: 0 },
          { transform: "translate(-50%, -50%)", opacity: 1 },
        ],
        {
          // timing options
          duration: 400,
          iterations: 1,
        }
      );
      refs.current[testimonials.length - 1].classList.add("active");
    } else {
      setCurrent(current - 1);
      refs.current[current - 1].animate(
        [
          // keyframes
          { transform: "translate(-150%, -50%)", opacity: 0 },
          { transform: "translate(-50%, -50%)", opacity: 1 },
        ],
        {
          // timing options
          duration: 400,
          iterations: 1,
        }
      );
      refs.current[current - 1].classList.add("active");
    }
  }

  return (
    <section id="testimonials">
      <div className="container">
        <h3>Testimonials About Us</h3>
        <div className="line"></div>
        <p className="head-text">
        Read what our satisfied customers have to say about us in our Testimonials About Us section.{" "}
        </p>
        <div className="testimonials-slider">
          <div className="previous" onClick={(e) => handlePrevious()}></div>
          <div className="next" onClick={(e) => handleNext()}></div>
          {testimonials.map((testimonial, index) => {
            return index === 0 ? (
              <Testimonial
                desc={testimonial.desc}
                author={testimonial.author}
                location={testimonial.location}
                imgSrc={testimonial.imgSrc}
                imgAlt={testimonial.imgAlt}
                key={index}
                active={true}
                reff={(el) => (refs.current[index] = el)}
              />
            ) : (
              <Testimonial
                desc={testimonial.desc}
                author={testimonial.author}
                location={testimonial.location}
                imgSrc={testimonial.imgSrc}
                imgAlt={testimonial.imgAlt}
                key={index}
                reff={(el) => (refs.current[index] = el)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testmonials;
