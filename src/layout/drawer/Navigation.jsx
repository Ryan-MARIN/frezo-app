import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <nav
      className="navigation"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
        <NavButton link='/home'>FRÉZO !</NavButton>
        <NavButton link='/writer'>Frézo Writer</NavButton>
        <NavButton link='/translate'>Frézo Translate</NavButton>
        <NavButton link='/learning'>Frézo Learning</NavButton>
        <NavButton link='/editor'>Frezo Editor</NavButton>
        <NavButton link='/about'>About</NavButton>
    </nav>
  );
};

export default Navigation;
