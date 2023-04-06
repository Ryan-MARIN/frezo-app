import React, { useEffect } from "react";
import phonems from "../../ressources/phonetique-vers-frezo.json";
import { Stack, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

const ipaToFrezo = (apiText) => {
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, "g"), replace);
  };

  for (let categorie in phonems) {
    for (let lettre in phonems[categorie]) {
      const find = lettre;
      const replace = phonems[categorie][lettre];
      apiText = replaceAll(apiText, find, replace);
    }
  }

  apiText = apiText
    .replace(/ã/g, "â")
    .replace(/ʊ/g, "u")
    .replace(/ɡ/g, "g")
    .replace(/ò̃/g, "ô")
    .replace(/ë̃/g, "ê")
    .replace(/è̃/g, "ê");

  apiText = apiText.replace(/͡|ˈ|ˌ|ː|-/g, "").replace(/-+/g, "-");

  apiText = apiText.replace(/–/g, "-");

  return apiText;
};

const FrezoTranslate = () => {
  const [textToTranslate, setTextToTranslate] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [translatedTextInfo, setTranslatedTextInfo] = React.useState({});
  const [ipaVersion, setIpaVersion] = React.useState("");
  const [frezoVersion, setFrezoVersion] = React.useState("");
  const apiLink = "https://api2.unalengua.com/ipav3";

  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo Translate`;
  }, [location]);

  React.useEffect(() => {
    if (Object.keys(translatedTextInfo).length > 0) {
      setIpaVersion(translatedTextInfo["ipa"]);
      setFrezoVersion(ipaToFrezo(translatedTextInfo["ipa"]));
    }
  }, [translatedTextInfo]);

  const searchInfo = (toTranslate) => {
    setTranslatedTextInfo({});
    setIsLoading(true);
    fetch(apiLink, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: toTranslate.replace(/-/g, "—"),
        lang: "fr-CA",
        mode: false,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setTranslatedTextInfo(response);
      })
      .catch((err) => {
        console.log("Error" + err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Stack spacing={2}>
      <h1>
        Frezo Translate<div>Traduisez des phrases en frézo !</div>
      </h1>
      <Stack>
        <div>Français : </div>
        <TextField
          multiline
          rows={4}
          value={textToTranslate}
          placeholder="Entrez votre texte en français..."
          onChange={(e) => {
            setTextToTranslate(e.target.value);
            searchInfo(e.target.value);
          }}
          sx={{ bgcolor: "white" }}
        />
      </Stack>
      <Stack>
        <div>Frézo : </div>
        <TextField
          multiline
          rows={4}
          disabled={isLoading}
          value={frezoVersion}
          placeholder="votr tèkst â frézo..."
          InputProps={{
            className: "frezo",
            readOnly: true,
          }}
          sx={{ bgcolor: "white" }}
        />
      </Stack>
      <i>En phonétique : {ipaVersion}</i>
    </Stack>
  );
};

export default FrezoTranslate;
