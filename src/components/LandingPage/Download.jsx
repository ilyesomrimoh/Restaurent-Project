import React from "react";

const Download = () => {
  return (
    <section className="download">
      <img src="./images/icons/landingpage-removebg-preview.png" alt="phone-app" className="phone scale-125" />
      <div className="content">
        <div>
          <p className="body-small head-line">Download our app</p>
          <h2>
          Download the App for Easy <br /> Ordering & Exclusive Benefits       </h2>
        </div>
        <p className="text body-small">
        Enhance your shopping experience with our app - download now for effortless ordering and exclusive perks.
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
