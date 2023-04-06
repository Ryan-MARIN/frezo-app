import React from 'react';

function formatString(str) {
  const parts = str.split(/(<[^<>]+>)/); // sépare la chaîne de caractères en parties
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('<') && part.endsWith('>')) {
          // si la partie est entre les balises, l'entourer de balises <u>
          const innerText = part.slice(1, -1);
          return <u key={index}>{innerText}</u>;
        } else {
          return part; // sinon, retourner la partie telle quelle
        }
      })}
    </span>
  );
}

export default formatString;