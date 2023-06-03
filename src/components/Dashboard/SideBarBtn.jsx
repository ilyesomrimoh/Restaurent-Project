import React from 'react'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faChartMixed ,faList , faBurgerFries } from '@fortawesome/free-solid-svg-icons';

const SideBarBtn = ({opn,title,img}) => {
   const styles = {
    backgroundImage: `url(${img})`,

  };
 const icon = img
  const imgRef = useRef(null)
return (
    
    <div  className={`side-bar-btn flex gap-4 overflow-hidden items-center p-3 my-2 ${opn ? 'w-44' : 'w-full'} h-18 rounded-xl`}>
      <FontAwesomeIcon  className={`${opn ? 'w-[25px]' : 'w-[42px]'} h-8 transitio-all delay-250`}  icon={icon} />
       
             <h2  className={`icon-header text-lg font-semibold tracking-wide ${opn ? '' : 'hidden'}`} >{title}</h2>
    </div>

  )
}

export default SideBarBtn
