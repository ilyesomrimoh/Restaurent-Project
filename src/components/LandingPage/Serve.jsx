import React from "react";
import Card from "./Card";

const Serve = () => {
  return (
    <section className="serve">
      <div className="container">
        <p className=".body-small serve-parg">What we Serve</p>
        <h3>
          Your Favorite Food
          <br />
          Delevery Partner
        </h3>
        <div className="card-parent">
          <Card
            title="Easy To Order"
            content="       Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="./images/icons/shopping-cart-with-money-100.png"
            altText="shopping-cart-with-money"
          />
          <Card
            title="Fastest delivery"
            content="       Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="./images/icons/motorcycle-delivery-single-box-100.png"
            altText="motorcycle-delivery-single-box"
          />
          <Card
            title="Best Quality"
            content="       Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="./images/icons/good-quality-100.png"
            altText="good-quality-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Serve;
