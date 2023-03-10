import React, { useState } from "react";

const Faq = () => {
  // const select = useRef([])
  const [clicked, setclicked] = useState(null);
  const faqContent = [
    {
      question: " Lorem ipsum, dolor sit amet consectetur adipisicing.",
      answer: "web devn haha haha hahah haha hah",
    },
    {
      question: "lorem text",
      answer: "lorem text",
    },
    {
      question: "lorem text",
      answer: "lorem text",
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
