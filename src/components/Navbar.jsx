import React from 'react';

const Navbar = () => {
  return (
    <header>
        <img src="" alt="logo" className="logo" />
      <nav>
        <ul className="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button class="btn"><i class="fa fa-home"></i> Be Restaurent</button>
    </header>
  )
}

export default Navbar