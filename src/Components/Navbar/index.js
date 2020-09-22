import React from "react";
import NavStyle from "./NavStyle";
import { useLocation } from 'react-router-dom'

// --image--
import Logo from "../../img/logo.png";

function Navbar() {

  {/* Hook to get component location */}
  let location = useLocation();
  
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand m-0">
          <img className="logo" src={Logo} alt="Logo" />
        </div>

        {/* Heading text change based on Components */}
        <div className="NavMiddle m-auto text-center">
          {
            location.pathname === "/" && 
          <div>
            <p className="m-0 text-white text-uppercase">teams</p>
            <span>View teams and knowledge access</span>
          </div>
          }
          {
            location.pathname === "/dashboard" && 
            <div>
              <p className="m-0 text-white text-uppercase">dashboard</p>
              <span>Data & interaction overview</span>
          </div>
          }
          {
            location.pathname === "/knowledge" && 
            <div>
                <p className="m-0 text-white text-uppercase">knowledge</p>
                <span>Allow team access</span>
            </div>
          }
            

        </div>
        <div className="NavbarRight">
          <img
            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
            alt="Profile"
          />
        </div>
      </nav>
      <NavStyle />
    </>
  );
}

export default Navbar;
