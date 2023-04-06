import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Copyright from "../../layout/drawer/Copyright";
import { Stack } from "@mui/material";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo - À propos`;
  }, [location]);

  return (
    <Stack spacing={4}>
      <div>
        Ce projet a été initié par{" "}
        <a
          href="https://github.com/Ryan-MARIN"
          style={{ textDecoration: "none" }}
        >
          <b>Ryan Marin</b>
        </a>
        {" "}et développé en collaboration avec{" "}
        <a href="https://github.com/Arseid" style={{ textDecoration: "none" }}>
          <b>Yves-Robert Estrada</b>
        </a>{" "}
        et{" "}
        <a
          href="https://github.com/Ryan-MARIN"
          style={{ textDecoration: "none" }}
        >
          <b>Ryan Marin</b>
        </a>
        ,{" "}
        <a href="https://github.com/Arseid" style={{ textDecoration: "none" }}>
          <b>Sinclair Balivet</b>
        </a>
        .
      </div>
      <div>
        Avec la participation de <b>Llona André--Augustine</b>.
      </div>
      <div>
        Mention spéciale à <b>Samuel Demont</b> et <b>Llona André--Augustine</b>{" "}
        qui m'a aidé à concevoir le Frézo.
      </div>
      <Copyright />
      <div className="frezo" style={{fontSize:'32px'}}>mersi !</div>
    </Stack>
  );
};

export default About;
