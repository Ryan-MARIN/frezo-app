import React from "react";
import MenuButton from './MenuButton';
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FrezoLearning = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo Learning`;
  }, [location]);

  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: '40px',
        }}
      >
        <h1>Frezo Learning<div>Apprenez le frézo pas à pas !</div></h1>
        <Stack spacing={2}>
        <MenuButton link="chapter-1" description="L'alphabet">Chapitre 1</MenuButton>
        <MenuButton link="chapter-2" description="Le système traditionnel">Chapitre 2</MenuButton>
        <MenuButton link="chapter-3" description="Le système simplifié">Chapitre 3</MenuButton>
        <MenuButton link="chapter-4" description="La numération">Chapitre 4</MenuButton>
        <MenuButton link="chapter-5" description="Les idéogrammes">Chapitre 5</MenuButton>
        </Stack>
      </div>
  );
};

export default FrezoLearning;
