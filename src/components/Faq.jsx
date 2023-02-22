import React, { useState } from 'react'

const Faq = () => {
    const [clicked , setclicked] = useState(null);
    const faqContent =[
        {
      
        question:"lorem text",
        answer:"lorem text"
    }
    ,{
      
        question:"lorem text",
        answer:"lorem text"
    },
    {
     
        question:"lorem text",
        answer:"lorem text"
    }];

    const questionClick = (id) => {
        setclicked(id === clicked ? null : id);
      };

  return (
    <section className='faq'>
        <h3>FAQ</h3>
        <div className="card-parent2">


 { faqContent.map((card , id) =>{
     return  <div  key={id} className="card2">
     <div className={`qest-part ${id === clicked ? "qest-part-active" : ""}`}>
         <p>{card.question}</p>
        <div className="sub-plus" onClick={()=>questionClick(id) }>
         <div  className={id === clicked ? "" : "plus"} ></div>
         <div className="sub"></div>
        </div>
     </div>
     <hr/>
     <p className="parg"> {id === clicked ? card.answer : ""}</p>
 </div> ;

 })}




        </div>   
    </section>
  )
}

export default Faq ;


