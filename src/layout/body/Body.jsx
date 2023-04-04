import React from "react";
import "./Body.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "end",
        justifyContent: "center",
        margin: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          overflow: "auto",
          backgroundColor: "white",
          position: "inherit",
          top: "0px",
          flexWrap: "wrap",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
