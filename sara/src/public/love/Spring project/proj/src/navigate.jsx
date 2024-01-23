import React, {  } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  
  
  return (
  <>
    <nav className="NavbarItems">
    <h1 className="logo">Game Vault  <i className="fa fa-gamepad" ></i>
     </h1>
     <div className="right">
     <button onClick={() => navigate('/')}>Home</button>
     <button onClick={() => navigate('/about')}>About Us</button>
     <button onClick={() => navigate('/menu')}>Catalog</button>
     <button onClick={() => navigate('/main')}>View Table</button>
     <button className="button type1" onClick={() => navigate('/login')}>
      <span className="btn-txt">Sign-up/ Login </span>
    </button>
     </div>
     </nav>
  </>
  );
}
export default Navbar;