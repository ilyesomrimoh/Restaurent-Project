import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    //tailwind class to make a sidebar container
    <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">My Sidebar</h1>
        <ul className='li:text-white'>
        <li><Link to="#" className="block py-2 ">Item 1</Link></li>
        <li><Link to="#" className="block py-2">Item 2</Link></li>
        <li><Link to="#" className="block py-2">Item 3</Link></li>
        </ul>
  </div>
    

  )
}

export default Sidebar