import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const { isAuth, logOut } = useContext(UserContext);
  return (
    <header>
      
      <img src="./images/icons/logo.png" alt="logo" className="logo" />
      {/* {isAuth && <li> <Link to="/dashboard"><p >{user.email}</p></Link></li>} */}
      

      <nav className={show ? "show" : ""}>
        <ul className="navigation">
          <li>
            <p href="/#">
              Home
            </p>
          </li>

          {isAuth && <li> <Link to="/dashboard"><p >Dashboard</p></Link></li>}
          <li>
            <p href="/#">
              Contact
            </p>
          </li>
          {isAuth && <li> <p onClick={()=> {logOut()}}>Logout</p></li>}
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
