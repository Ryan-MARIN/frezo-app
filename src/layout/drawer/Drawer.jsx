import React from "react";
import Logo from "./Logo";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import "./Drawer.css";
import {Link} from "react-router-dom";

const Drawer = () => {
  return (
    <div
    className="drawer"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Link
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          backgroundColor: "#0006",
        }}
        to="/"
        >
            <Logo />
        </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "black",
          color: "white",
          width: "100%",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Navigation />
      </div>
      <Copyright />
    </div>
  );
};

export default Drawer;
