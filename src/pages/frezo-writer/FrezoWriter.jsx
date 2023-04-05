import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FrezoWriter = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo Writer`;
  }, [location]);

  return (
    <>
      <h1>
        Frezo Writer<div>Écrivez des textes en frézo !</div>
      </h1>
      N'existe pas encore.
    </>
  );
};

export default FrezoWriter;
