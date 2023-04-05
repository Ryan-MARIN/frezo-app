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
        <NavButton link='/writer' icon>Frézo Writer</NavButton>
        <NavButton link='/translate' icon>Frézo Translate</NavButton>
        <NavButton link='/learning' icon>Frézo Learning</NavButton>
        <NavButton link='/editor' icon>Frézo Editor</NavButton>
        <NavButton link='/about'>À propos</NavButton>
    </nav>
  );
};

export default Navigation;
