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
      <NavButton>FRÉZO !</NavButton>
      <NavButton>Frézo Writer</NavButton>
      <NavButton>Frézo Translate</NavButton>
      <NavButton>Frézo Learning</NavButton>
      <NavButton>Frezo Editor</NavButton>
      <NavButton>About</NavButton>
    </nav>
  );
};

export default Navigation;
