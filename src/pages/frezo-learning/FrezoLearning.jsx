import React from "react";
import MenuButton from './MenuButton';

const FrezoLearning = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:'100%',
        flexGrow: 1
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: '40px',
        }}
      >
        <h1 style={{ textAlign:"center"}}>Apprenez le Frézo pas à pas !</h1>
        <MenuButton link="chapter-1" description="L'alphabet">Chapitre 1</MenuButton>
        <MenuButton link="chapter-2" description="Le système traditionnel">Chapitre 2</MenuButton>
        <MenuButton link="chapter-3" description="Le système simplifié">Chapitre 3</MenuButton>
        <MenuButton link="chapter-4" description="La numération">Chapitre 4</MenuButton>
        <MenuButton link="chapter-5" description="Les idéogrammes">Chapitre 5</MenuButton>
      </div>
    </div>
  );
};

export default FrezoLearning;
