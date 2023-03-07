import React from "react";

const Download = () => {
  return (
    <section className="download">
      <img src="./images/icons/phone.png" alt="phone-app" className="phone" />
      <div className="content">
        <div>
          <p className="body-small head-line">Download our app</p>
          <h2>
            Get The Groceries App <br /> Order More Easily
          </h2>
        </div>
        <p className="text body-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          ratione?
        </p>
        <div className="link">
          <a href="/#">
            <img
              className="google"
              src="./images/icons/google-play-badge.png"
              alt="play-store"
            />
          </a>
          <a href="/#">
            {" "}
            <img
              src="./images/icons/app-store-png-logo-33107.png"
              alt="App-store"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
