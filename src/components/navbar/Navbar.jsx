import React, { useContext, useState } from "react";
import MenuIcon from "../../img/menu.png";
import NavbarLinks from "./NavbarLinks";
import "./Navbar.css";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = (e) => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-logo">
          <Logo />
          {/* <NavbarLinks /> */}
          <img
            src={MenuIcon}
            alt="menu icon"
            className="menu-icon"
            onClick={handleMenu}
          />
        </div>
        <NavbarLinks active={isMenuActive} setIsMenuActive={setIsMenuActive} />
      </div>
    </div>
  );
};

export default Navbar;
