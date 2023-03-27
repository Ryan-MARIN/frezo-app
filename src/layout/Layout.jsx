import React from "react";
import background from "./images/background.png";
import Drawer from './drawer/Drawer';

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
      }}
    >
      <Drawer/>
      <div style={{display:"flex",flexGrow:1, alignItems:"center", justifyContent:"center"}}>a</div>
    </div>
  );
};

export default Layout;
