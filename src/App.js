import React, { useState, useEffect } from "react";
import "modern-normalize";

import Game from "./components/Game";
import Footer from "./components/Footer";
import Header from "./components/Header";
import cardsData from "./data.json";
import "./styles/App.css";

const App = () => {
  const updateScore = (newScore, newBestScore) => {
    setScore(newScore);
    setBestScore(newBestScore);
  };
  // useEffect(() => {

  // });
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="content">
      <Header score={score} bestScore={bestScore} />
      <Game cardsData={cardsData} updateScore={updateScore} />
      <Footer />
    </div>
  );
};

export default App;
