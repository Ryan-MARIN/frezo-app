import React from "react";
import AlphabetFrezo from "../../../ressources/alphabet-frezo.json";
import { Grid, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import formatString from "../../../helpers/formatString";

const Exercice1 = () => {
  const [currentSymbol, setCurrentSymbol] = React.useState(null);
  const [keyCurrentSymbol, setKeyCurrentSymbol] = React.useState(null);
  const mergeVoyellesConsonnes = {
    ...AlphabetFrezo["voyelles"],
    ...AlphabetFrezo["consonnes"],
  };

  const generateRandomSymbol = () => {
    const keys = Object.keys(mergeVoyellesConsonnes);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    setKeyCurrentSymbol(randomKey);
    const randomSymbol = mergeVoyellesConsonnes[randomKey];
    setCurrentSymbol(randomSymbol);
  };

  React.useEffect(() => {
    generateRandomSymbol();
  }, []);

  const handleLetterClick = (letter) => {
    if (letter === currentSymbol["francais"][0]) {
      alert("Correct!");
      generateRandomSymbol();
    } else {
      alert("Incorrect. Try again!");
    }
  };

  const renderSounds = () => {
    const buttons = [];

    Object.values(mergeVoyellesConsonnes).forEach((lettre) => {
      buttons.push(
        <Grid item key={lettre.francais[0]} xs={2} lg={1}>
          <Tooltip title={formatString(lettre.exemples[0] + ", " + lettre.exemples[1])} arrow>
            <button
              style={{ width: "100%", height: "100%" }}
              onClick={() => handleLetterClick(lettre.francais[0])}
            >
              {lettre.francais[0]} <br /> ({lettre.phonetique[0]})
            </button>
          </Tooltip>
        </Grid>
      );
    });

    return buttons;
  };

  return (
    <div>
      <h1>Exercice 1</h1>
      {currentSymbol && (
        <Stack alignItems={"center"}>
          <span className="frezo" style={{ fontSize: "100px" }}>
            {keyCurrentSymbol}
          </span>
          Cliquez sur le son correspondant à cette lettre :
          <p>
            <Grid container spacing={1} justifyContent={"center"}>
              {renderSounds()}
            </Grid>
          </p>
        </Stack>
      )}
    </div>
  );
};

export default Exercice1;
