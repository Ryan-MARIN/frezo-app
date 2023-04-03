import React from "react";
import "./Body.css";
import {Outlet} from "react-router-dom";

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
          color: "white",
          backgroundColor: "black",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "10px 20px" }}>
          Titre de la page
        </h1>
      </div>

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
          flexWrap: "wrap"
        }}
      >
        <div style={{ padding: "20px" }}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Body;
