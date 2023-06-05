import React from 'react'
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react'
const DropDown = ({ setCategory }) => {
    const {categories } = useContext(UserContext);
     console.log('test  '+categories);
  return (
    <div id="dropdown" className="z-20  absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
    <li>
        <button type="button" onClick={()=>setCategory("All")} className="inline-flex w-full px-4 py-2  hover:bg-[var(--primary-color)] text-black  hover:text-white">All</button>
    </li>
    <li>
        <button type="button" onClick={()=>setCategory("Pizza")} className="inline-flex w-full px-4 py-2 hover:bg-[var(--primary-color)]  text-black hover:text-white">Pizza</button>
    </li>
    <li>
        <button type="button" onClick={()=>setCategory("Tacos")} className="inline-flex w-full px-4 py-2 hover:bg-[var(--primary-color)] text-black  hover:text-white">Tacos</button>
    </li>
    <li>
        <button type="button" onClick={()=>setCategory("Humburger")} className="inline-flex w-full px-4 py-2  hover:bg-[var(--primary-color)] text-black hover:text-white">Humburger</button>
    </li>

   
    </ul>
</div>
  )
}

export default DropDown
