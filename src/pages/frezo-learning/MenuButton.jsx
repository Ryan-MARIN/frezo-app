import React from "react";
import "./MenuButton.css";
import { NavLink } from 'react-router-dom';

const MenuButton = (props) => {
  return (
    <NavLink
      className="menu-button"
      style={{
        color: "white",
        backgroundColor: "black",
        borderStyle: "none",
        borderRadius: "20px",
        width: "300px",
        margin: "8px",
        padding: "8px",
        textDecoration:"none",
        textAlign:"center"
      }}
      to={props.link}
    >
      <div>{props.children}</div>
      <b>{props.description}</b>
    </NavLink>
  );
};

export default MenuButton;
