import React from "react";
import AlphabetFrezo from "../../../ressources/alphabet-frezo.json";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";

const Exercice1 = () => {
  const [currentSymbol, setCurrentSymbol] = React.useState(null);

  const generateRandomSymbol = () => {
    const randomIndex = Math.floor(
      Math.random() * AlphabetFrezo["chiffres"].length
    );
    const randomSymbol = AlphabetFrezo["chiffres"][randomIndex];
    setCurrentSymbol(randomSymbol);
  };

  React.useEffect(() => {
    generateRandomSymbol();
  }, []);

  const handleLetterClick = (number) => {
    if (number === currentSymbol) {
      alert("Correct!");
      generateRandomSymbol();
    } else {
      alert("Incorrect. Try again!");
    }
  };

  const renderNumbers = () => {
    const buttons = [];

    Object.values(AlphabetFrezo["chiffres"]).forEach((number) => {
      buttons.push(
        <Grid item key={number} xs={2} md={1}>
          <button
            style={{ width: "100%", height: "100%" }}
            onClick={() => handleLetterClick(number)}
          >
            {number}
          </button>
        </Grid>
      );
    });

    return buttons;
  };

  return (
    <>
      <h1>Exercice 1</h1>
      {currentSymbol && (
        <Stack alignItems={"center"}>
          <span className="frezo" style={{ fontSize: "100px" }}>
            {currentSymbol}
          </span>
          Cliquez sur le son correspondant à cette lettre :
          <Grid columns={10} container spacing={1} justifyContent={"center"}>
            {renderNumbers()}
          </Grid>
        </Stack>
      )}
    </>
  );
};

export default Exercice1;
