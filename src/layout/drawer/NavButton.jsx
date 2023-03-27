import React from "react";
import "./NavButton.css";

const NavButton = (props) => {
  const { children } = props;
  return (
    <a
      className="nav-button"
      style={{
        textShadow: "black 0px 0px 4px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        fontSize: "25px",
        color: "white",
        textDecoration: "none",
      }}
      href="#"
    >
      <div className="nav-button-icon" style={{ width: "30px", height:"100%", padding:"0px 10px" }}/>
      {children}
    </a>
  );
};

export default NavButton;
