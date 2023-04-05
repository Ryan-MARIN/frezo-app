import React from "react";
import "../ChapterLayout.css";
import Exercice1 from "./Exercice1";

const Chapter1 = () => {
  return (
    <div>
      <h1>Chapitre 1 : L'alphabet</h1>
      <article>
        <p>
          Le frézo se compose de 34 lettres, dont 13 voyelles et 21 consonnes.
        </p>
        <p>Chaque lettre est associée à un son :</p>
        <table>
          <thead>
            <tr>
              <th>Frézo</th>
              <th>Phonétique</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>Avion</td>
            </tr>
          </tbody>
        </table>
      </article>
      <Exercice1 />
    </div>
  );
};

export default Chapter1;
