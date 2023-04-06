import { Stack } from "@mui/system";
import React from "react";

const Chapter2 = () => {
  return (
    <div>
      <h1>Chapitre 2 : Le système traditionnel</h1>
      <p>
        Le Frézo traditionnel a été conçu pour ressembler aux frises grècques
        que l'on retrouve pafois gravée à même la pierre dans certaines ruines
        antiques. C'est un alphabet mystérieux dont chacune des lettres se
        ressemble.
      </p>
      <Stack alignItems="center">
        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7495.png" />
      </Stack>
      <p>Sa lecture autant que son écriture sont particulières :</p>
      <ul>
        <li>
          Chaque lettre de frézo traditionnel est écrite sur une grille de
          carrés par colonne, et un nombre généralement impair de lignes.
        </li>
        <li>
          Les mots, phrases et paragraphes sont délimités grâce aux lignes de
          lecture supérieure et inférieure, qui doivent toujours être
          représentées (voir exemple sur l'image ci-dessous). Les mots sont
          séparés par une encoche d'une unité de largeur sur la ligne de lecture
          du bas, les phrases sont séparées par une encoche sur la ligne de
          lecture du haut, et les paragraphes, sur les deux lignes de lecture en
          même temps.
        </li>
      </ul>
      <Stack alignItems="center">
      <img src="./../../../images/learning/frezo-traditionnel.png" />
      </Stack>
      
    </div>
  );
};

export default Chapter2;
