import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// --style--
import BottomNavStyle from "../BottomNav/BottomNavStyle";

class BottomNav extends Component {
  render() {

    // To check active component.
    const checkActive = (match, location) => {
      if (!location) return false;
      const { pathname } = location;
      return pathname === "/";
    };
    
    return (
      <>
        <div className="BottomNav col-lg-8 text-center ml-auto mr-auto mt-4 mb-3">
          <ul>
            <li>
              <NavLink activeClassName="team" isActive={checkActive} to="/">
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="dashbaord" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="Knowledge" to="/knowledge">
                knowledge
              </NavLink>
            </li>
          </ul>
        </div>
        <BottomNavStyle />
      </>
    );
  }
}

export default BottomNav;
