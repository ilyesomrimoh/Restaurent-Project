import React from 'react'
const SideBarBtn = ({opn,title,img , img_alt}) => {
return (
    
    <div  className={`side-bar-btn flex gap-4 overflow-hidden items-center p-3 my-2 ${opn ? 'w-44' : 'w-full'} h-18 rounded-xl`}>
      <img className={`${opn ? 'w-[32px]' : 'w-[42px]'} transitio-all delay-250`} src={img} alt={img_alt}/>
      <h2  className={`icon-header text-lg font-semibold tracking-wide ${opn ? '' : 'hidden'}`} >{title}</h2>
    </div>

  )
}

export default SideBarBtn
