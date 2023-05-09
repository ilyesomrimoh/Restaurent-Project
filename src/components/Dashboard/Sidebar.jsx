import React from 'react'
import { Link } from 'react-router-dom'
import Side_Bar_Btn from './Side_Bar_Btn'


function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">My Sidebar</h1>
        <ul className='li:text-white'>
        <li><Link to="#"><Side_Bar_Btn title="Dashboard" img="./images/icons/icons8-laptop-metrics-100.png" img_alt="test" /></Link></li>
        <li><Link to="#" className="block py-2">Item 2</Link></li>
        <li><Link to="#" className="block py-2">Item 3</Link></li>
        </ul>
  </div>
    

  )
}

export default Sidebar