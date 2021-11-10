import * as React from "react";
import {
  navStyle,
  pNavHeading,
  divNavLinks,
  pNavLink,
  divMobileMenu,
  pMobileMenu
} from "./navBar.module.css";
import {useState} from "react";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className={navStyle} id={"home"}>
      <p className={pNavHeading}>Edie</p>
      <div className={divNavLinks}>
        <a className={pNavLink} href={"#home"}>Home</a>
        <a className={pNavLink} href={"#services"}>Services</a>
        <a className={pNavLink} href={"#works"}>Our Works</a>
        <a className={pNavLink} href={"#clients"}>Clients</a>
        <a className={pNavLink} href={"#contact"}>Contact</a>
      </div>
      <p
        className={`material-icons ${pMobileMenu}`}
        onClick={() => setMenuVisible(!menuVisible)}
        style={menuVisible ? {position: "fixed"} : {position: "unset"}}
      >
        {menuVisible ? "close" : "menu"}
      </p>

      <div
        className={divMobileMenu}
        style={menuVisible ? {display: "flex"} : {display: "none"}}
      >
        <a
          className={pNavLink}
          href={"#home"}
          onClick={() => setMenuVisible(!menuVisible)}
        >Home</a>
        <a
          className={pNavLink}
          href={"#services"}
          onClick={() => setMenuVisible(!menuVisible)}
        >Services</a>
        <a
          className={pNavLink}
          href={"#works"}
          onClick={() => setMenuVisible(!menuVisible)}
        >Our Works</a>
        <a
          className={pNavLink}
          href={"#clients"}
          onClick={() => setMenuVisible(!menuVisible)}
        >Clients</a>
        <a
          className={pNavLink}
          href={"#contact"}
          onClick={() => setMenuVisible(!menuVisible)}
        >Contact</a>
      </div>
    </nav>
  )
}

export default NavBar;
