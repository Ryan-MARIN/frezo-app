import React from "react";
import phonems from "../../ressources/phonems.json";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

const ipaToFrezo = (apiText) => {
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, "g"), replace);
  };

  // Conversions en frézo des lettres phonétiques françaises
  Object.keys(phonems["api-apf-frezo"]).forEach((key) => {
    Object.keys(phonems["api-apf-frezo"][key]).forEach((subKey) => {
      const find = subKey;
      const replace = phonems["api-apf-frezo"][key][subKey][1];
      apiText = replaceAll(apiText, find, replace);
    });
  });

  // Conversion en frézo des lettres phonétiques étrangères éventuelles

  apiText = apiText.replace(/ã/g, "â").replace(/ʊ/g, "u").replace(/ɡ/g, "g");

  // Retrait des caractères phonétiques spéciaux
  apiText = apiText.replace(/͡|ˈ|ˌ|ː|-|[\u0303]/g, "").replace(/-+/g, "-");

  // Reproduction des traits-d'unions
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
    <Stack sx={{ padding: "32px" }} spacing={2}>
      <h1>Frezo Translate</h1>
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
        />
      </Stack>
      <i>En phonétique : {ipaVersion}</i>
    </Stack>
  );
};

export default FrezoTranslate;
