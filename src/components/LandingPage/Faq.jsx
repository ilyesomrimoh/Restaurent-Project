import React, { useState } from "react";

const Faq = () => {
  // const select = useRef([])
  const [clicked, setclicked] = useState(null);
  const faqContent = [
    {
      question: "How can I place an order through the app?",
      answer: " Placing an order is simple. Just download our app, sign up for an account, browse through the available restaurants, select your desired items, and proceed to the checkout. You can track the status of your order in real-time.",
    },
    {
      question: "Can restaurant owners easily manage their menu and orders?",
      answer: "Yes, our website dashboard provides restaurant owners with a user-friendly interface to efficiently manage their menu and orders. They can easily add or edit menu items, track incoming orders, and update the status of each order.",
    },
    {
      question: "Is the AI-based restaurant recommendation personalized?",
      answer: "Yes, our AI-based system analyzes your preferences and past orders to provide personalized restaurant recommendations. We take into account your taste preferences, dietary restrictions, and favorite cuisines to ensure you discover the best dining options.",
    }, {
      question: "Is the app available for both iOS and Android devices?",
      answer: " Yes, our app is available for both iOS and Android devices. You can download it from the App Store for iOS devices or the Google Play Store for Android devices. Enjoy a seamless ordering experience regardless of your device preference.",
    },
  ];

  const questionClick = (id) => {
    setclicked(id === clicked ? null : id);
  };

  return (
    <section className="faq">
      <h3>FAQ</h3>
      <div className="card-parent2">
        {faqContent.map((card, id) => {
          return (
            <div
              key={id}
              className={`card2 ${id === clicked ? "card2-active" : ""}`}
            >
              <div className="qest-part">
                <p>{card.question}</p>
                <div className="sub-plus" onClick={(e) => questionClick(id)}>
                  <div className="center-div">
                    <div className={id === clicked ? "" : "plus"}></div>
                    <div className="sub"></div>
                  </div>
                </div>
              </div>
              <div className={`second ${id === clicked ? "visible" : ""}`}>
                <hr />
                <p className="parg"> {card.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
