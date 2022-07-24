import React from "react";

import "../styles/Header.css";

const Header = (props) => {
  return (
    <header className="page-header">
      <h1 className="title">
        <img
          className="simpsons-logo"
          src="./assets/the_simpsons_logo.png"
          alt="The Simpsons Logo"
        />{" "}
        Memory Card Game
      </h1>
      <div className="game-header">
        <p className="score-label">
          Score: <span className="score">{props.score}</span>
        </p>
        <p className="best-score-label">
          Best score: <span className="bestScore">{props.bestScore}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
