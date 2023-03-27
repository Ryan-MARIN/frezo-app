import React from "react";
import background from "../images/background.png";
import Drawer from './drawer/Drawer';
import Body from "./body/Body";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Drawer/>
      <Body/>
    </div>
  );
};

export default Layout;
