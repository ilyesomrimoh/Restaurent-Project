import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          Be The Fastest In Delevering Your{" "}
          <span className="red-text">Food</span>
        </h1>
        <p className="body-small">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          quod soluta! Esse in delectus consequatur ipsa aspernatur, eos nihil
          debitiis itaque.
        </p>
        <div className="btns">
          <button className="btn">Order Now</button>
          <button className="btn btn-ghost">Become Restaurent</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="./images/hero-bg.png" alt="hero background" />
      </div>
    </div>
  );
}

export default Hero;
