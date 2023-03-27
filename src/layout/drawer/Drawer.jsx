import React from "react";
import Logo from "./Logo";
import Copyright from "./Copyright";
import Navigation from "./Navigation";

const Drawer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          backgroundColor: "#0006",
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "black",
          color: "white",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Navigation />
      </div>
      <Copyright />
    </div>
  );
};

export default Drawer;
