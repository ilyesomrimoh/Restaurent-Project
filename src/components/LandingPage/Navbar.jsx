import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <header>
  
      <img src="./images/icons/logo.png" alt="logo" className="logo" />
    

      <nav className={show ? "show" : ""}>
        <ul className="navigation">
          <li>
            <a href="/#" className=".body-small">
              Home
            </a>
          </li>
          <li>
            <a href="/#" className=".body-small">
              Service
            </a>
          </li>
          <li>
            <a href="/#" className=".body-small">
              Contact
            </a>
          </li>
        </ul>
      </nav>

    <Link to='/signup'>
      <button className="btn btn-ghost scale">
        <i className="fa fa-home"></i> Be Restaurent
      </button></Link>
 

      <div className="humberger Mobile" onClick={() => setshow(!show)}>
        <div className={show ? "rotate1" : ""}></div>
        <div className={show ? "hidden" : ""}></div>
        <div className={show ? "rotate2" : ""}></div>
      </div>
    </header>
  );
};

export default Navbar;
