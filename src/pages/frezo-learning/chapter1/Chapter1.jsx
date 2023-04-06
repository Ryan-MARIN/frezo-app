import React from "react";
import "../ChapterLayout.css";
import Exercice1 from "./Exercice1";
import alphabetFrezo from "../../../ressources/alphabet-frezo.json";
import formatString from "../../../helpers/formatString";

const Chapter1 = () => {
  return (
    <div>
      <h1>Chapitre 1 : L'alphabet</h1>
      <article>
        <p>
          Le frézo se compose de 34 lettres, dont 13 voyelles et 21 consonnes.
        </p>
        <p>Chaque lettre est associée à un son :</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <thead>
              <tr>
                <th>Frézo</th>
                <th>Phonétique</th>
                <th>Transcription commune</th>
                <th>Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="4"><b>Voyelles</b></th>
              </tr>
              {Object.entries(alphabetFrezo.voyelles).map(([key, value]) => {
                const element = formatString(
                  value.exemples[0] + ", " + value.exemples[1]
                );
                console.log(element);
                return (
                  <tr key={key}>
                    <td className="frezo" style={{ fontSize: "32px" }}>
                      {key}
                    </td>
                    <td>{value.phonetique.join(", ")}</td>
                    <td>{value.francais.join(", ")}</td>
                    <td>{element}</td>
                  </tr>
                );
              })}
              <tr>
                <th colspan="4"><b>Consonnes</b></th>
              </tr>
              {Object.entries(alphabetFrezo.consonnes).map(([key, value]) => (
                <tr key={key}>
                  <td className="frezo" style={{ fontSize: "32px" }}>
                    {key}
                  </td>
                  <td>{value.phonetique.join(", ")}</td>
                  <td>{value.francais.join(", ")}</td>
                  <td>{formatString(value.exemples.join(", "))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
      <Exercice1 />
    </div>
  );
};

export default Chapter1;
