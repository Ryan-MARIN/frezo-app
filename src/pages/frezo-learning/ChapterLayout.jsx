import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ChapterLayout = (props) => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <NavLink to="/learning" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "0px",
              "&:hover": { bgcolor: "white", color: "black" },
              flexWrap: true,
            }}
          >
            ◄&nbsp;Retour
          </Button>
        </NavLink>
      </div>
      {props.children}
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <NavLink to="/learning" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "0px",
              "&:hover": { bgcolor: "white", color: "black" },
              flexWrap: true,
            }}
          >
            ◄&nbsp;Retour
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default ChapterLayout;
