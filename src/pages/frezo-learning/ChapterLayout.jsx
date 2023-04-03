import React from "react";
import { NavLink } from 'react-router-dom';

const ChapterLayout = (props) => {
  return (
    <div>
      <NavLink to="/learning">← Retour</NavLink>
      {props.children}
    </div>
  );
};

export default ChapterLayout;
