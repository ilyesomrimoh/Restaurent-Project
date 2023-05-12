import React from 'react'
const SideBarBtn = ({opn,title,img , img_alt}) => {
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
    <div  className={`side-bar-btn flex gap-4 overflow-hidden items-center p-3 my-2 ${opn ? 'w-44' : 'w-full'} h-18 rounded-xl`}>
      <img className={`${opn ? 'w-[36px]' : 'w-[50px]'} transitio-all delay-250`} src={img} alt={img_alt}/>
      <h2  className={`icon-header text-lg font-semibold tracking-wide ${opn ? '' : 'hidden'} transitio-all delay-150`} >{title}</h2>
    </div>

  )
}

export default SideBarBtn
