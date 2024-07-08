import { LOGO_URL } from "../utils/contant";
import { useState, useEffect } from "react";
const Header = () => {
  //if no dependency array then use effect is called after every render
  // if dependency array is empty = [] => useEffect is called on initial render
  // if dependency array is [btnNameReact] => called everytime btnNameReact when is updated
  useEffect(() => {}, []);
  const [LoginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="HeadLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              LoginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {" "}
            {LoginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
