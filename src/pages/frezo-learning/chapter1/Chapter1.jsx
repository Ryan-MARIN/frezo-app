import React from "react";
import "../ChapterLayout.css";

const Chapter1 = () => {
  return (
    <div>
      <h1>Chapitre 1 : L'alphabet</h1>
      <article>
        <p>
          L'alphabet Frézo se compose de l'ensemble des sonorités existantes
          dans la langue française.
        </p>
        <p>
          En effet, Il se construit sur le modèle de l'APF (Alphabet Phonétique
          Français), un alphabet qui recense l'ensemble des sons français
          existants dans la langue française.
        </p>
        <p className="info">
          L'APF est un alphabet phonétique créé lui-même sur le modèle de l'API
          (Alphabet Phonétique Internationnal). L'API rencense les sons de
          l'ensemble des langues du monde, et utilise tout un tas de symboles
          assez exotiques. L'APF est pratique pour le Frézo car il ne recense
          que la partie française de l'API, et utilise des symboles connus des
          français.
        </p>
        <h2>Leste des symboles</h2>
        <table>
          <thead>
            <tr>
              <th>Frézo</th>
              <th>APF</th>
              <th>API</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>Avion</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default Chapter1;
