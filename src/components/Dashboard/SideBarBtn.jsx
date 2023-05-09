import React from 'react'
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
const SideBarBtn = ({title,img , img_alt}) => {
//   const changeSrc = (e,id) => {
//     const imgg = e.target.querySelector("img");
//     if(id === 1 && imgg){
//         imgg.src = img2 ;
//     }else{

//         imgg.src = img;  
//     }
// }
  return (
    //onMouseOver={(e)=> changeSrc(e,1)} onMouseLeave={(e)=> changeSrc(e,2)}
    <div  className="side-bar-btn flex gap-4 justify-start items-center p-3 my-2 w-44 h-18 rounded-xl">
      <img className='w-6' src={img} alt={img_alt}/>


<FontAwesomeIcon icon="fa-regular fa-chart-line-down" />


      <h2  className='text-lg font-semibold tracking-wide ' >{title}</h2>
    </div>

  )
}

export default SideBarBtn
