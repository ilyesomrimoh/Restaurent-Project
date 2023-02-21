import React from 'react';

const Navbar = () => {
  return (
    <header>
        <img src="" alt="logo" className="logo" />
        <div className="humberger">
            <div></div>
            <div></div>
            <div></div>
        </div>
      <nav>
        <ul className="navigation">
            <li><a href="#" className='caption'>Home</a></li>
            <li><a href="#" className='caption' >Service</a></li>
            <li><a href="#" className='caption'>Contact</a></li>
        </ul>
      </nav>
      <button className="btn"><i className="fa fa-home"></i> Be Restaurent</button>
    </header>
  )
}

export default Navbar