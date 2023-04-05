import React, { useEffect } from "react";
import "./Body.css";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `FRÉZO - ${location.pathname}`;
  }, [location]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        overflow: "overlay",
        backgroundColor: "#FFFC",
        position: "inherit",
        top: "0px",
        flexWrap: "wrap",
        margin: "40px",
        padding: "32px",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Body;
