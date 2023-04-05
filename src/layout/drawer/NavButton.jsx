import React from "react";
import "./NavButton.css";
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
  const { children, link, icon } = props;
  return (
    <NavLink
      className="nav-button"
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        fontSize: "25px",
        color: "white",
        textDecoration: "none",
      }}
      to={link}
    >
      <div className={icon ? "nav-button-icon" : undefined} style={{ width: "30px", height:"100%", padding:"0px 10px" }}/>
      {children}
    </NavLink>
  );
};

export default NavButton;
