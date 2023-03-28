import React from "react";
import "./NavButton.css";
import {Link} from "react-router-dom";

const NavButton = (props) => {
  const { children, link } = props;
  return (
    <Link
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
      <div className="nav-button-icon" style={{ width: "30px", height:"100%", padding:"0px 10px" }}/>
      {children}
    </Link>
  );
};

export default NavButton;
