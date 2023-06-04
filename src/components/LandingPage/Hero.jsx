import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text sm:text-[40px]">
        <h1>
        Explore Local Restaurant Gems on{" "}
          <span className="red-text">Tabaki</span>
        </h1>
        <p className="body-small">
        Discover a world of flavors at your fingertips with Tabaki. Browse, order, and enjoy delicious meals from a variety of local restaurants with just a few taps.
        </p>
        <div className="btns flex items-center justify-center">
          <button className="btn mt-4 ">Order Now</button>
          <Link to='/signup'>
      <button className="btn btn-ghost ">
        <i className="fa fa-home"></i> Be Restaurent
      </button></Link>
        </div>
      </div>
      <div className="hero-img">
        <img src="./images/hero-section.png" alt="hero background" />
      </div>
    </section>
  );
}

export default Hero;
