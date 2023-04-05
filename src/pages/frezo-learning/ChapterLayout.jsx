import { Button, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ChapterLayout = (props) => {
  return (
    <Stack>
      <NavLink to="/learning" style={{ textDecoration: "none" }}>
        <Button sx={{bgcolor:"black", color:"white", borderRadius:'0px', '&:hover':{bgcolor:"white", color:"black"}}}>◄&nbsp;Retour</Button>
      </NavLink>
      {props.children}
    </Stack>
  );
};

export default ChapterLayout;
