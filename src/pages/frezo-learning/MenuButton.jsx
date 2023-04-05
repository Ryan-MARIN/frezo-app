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
        padding: "16px",
        textDecoration:"none",
      }}
      to={props.link}
    >
      <div>{props.children}</div>
      <div><b>{props.description}</b></div>
      <div>→ <i>{props.info}</i></div>
    </NavLink>
  );
};

export default MenuButton;
