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
        width: "100%",
        minWidth: "310px",
        overflow: "overlay",
        backgroundColor: "#FFFC",
        position: "inherit",
        top: "0px",
        flexWrap: "wrap",
        margin: "40px"
      }}
    >
      <div style={{
        overflowY: "auto",
        padding: "32px", }}>
      <Outlet />
      </div>
    </div>
  );
};

export default Body;
