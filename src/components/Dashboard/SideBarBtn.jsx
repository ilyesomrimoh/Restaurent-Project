import React from 'react'

const SideBarBtn = ({title,img, img2="test" , img_alt}) => {
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
    <div  className=" side-bar-btn flex gap-4 justify-start items-center p-3 w-44 h-10 rounded-xl">
      <img className='w-6' src={img} alt={img_alt}/>
      <h2  className='text-lg font-semibold tracking-wide ' >{title}</h2>
    </div>

  )
}

export default SideBarBtn
