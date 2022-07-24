import React from "react";
import { FaGithub } from "react-icons/fa";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        Axel C. Lopez Copyright 2022{" "}
        <a href="https://www.github.com/lopezac">
          <FaGithub className="github-icon" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
