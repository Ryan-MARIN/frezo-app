import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <div
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
    </div>
  );
};

export default Navigation;
