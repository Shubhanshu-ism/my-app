import { LOGO_URL } from "../utils/contant";
import { useState } from "react";
const Header = () => {
  const [LoginButton,setLoginButton] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
        <img 
            className="logo" 
            src={LOGO_URL}  alt="HeadLogo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-button" onClick={()=>{LoginButton==="Login" ?setLoginButton("Logout"):setLoginButton("Login")}}> {LoginButton}</button>
          </ul>
        </div>
      </div> 
    );
    
  };
export default Header;