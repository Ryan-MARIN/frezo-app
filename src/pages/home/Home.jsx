import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./../../layout/drawer/Navigation";
import { Card, Stack } from "@mui/material";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo`;
  }, [location]);

  return (
    <Stack spacing={1}>
      <h1>Découvrez le frézo à travers nos différentes sections :</h1>
      <Link to={"/writer"} style={{ color: "black", textDecoration: "none" }}>
        <Card sx={{p:1}}>
          <b>Frézo Writer</b> — Réalisez de beaux textes en frézo. Personnalisez
          et enregistrez-les !
          <div>
            <b>[N'existe pas encore.]</b>
          </div>
        </Card>
      </Link>
      <Link to={"/translate"} style={{ color: "black", textDecoration: "none" }}>
        <Card sx={{p:1}}>
          <b>Frézo Translate</b> — Traduisez des mots et des phrases en frézo.
        </Card>
      </Link>
      <Link to={"/learning"} style={{ color: "black", textDecoration: "none" }}>
        <Card sx={{p:1}}>
          <b>Frézo Learning</b> — Apprennez le frézo à travers 5 chapitres de
          cours et d'exercices.
        </Card>
      </Link>
      <Link to={"/editor"} style={{ color: "black", textDecoration: "none" }}>
        <Card sx={{p:1}}>
          <b>Frézo Editor</b> — Créez vos propres lettres frézo et
          sauvegardez-les.
        </Card>
      </Link>
    </Stack>
  );
};

export default Home;
