import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import ResetBtn from "./ResetBtn";
import "../styles/Game.css";

const Game = (props) => {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cardsTouched, setCardsTouched] = useState([]);
  const cards = props.cardsData.cards;

  const touchCard = (id) => {
    if (cardWasTouched(id)) return reset();
    setCardsTouched([...cardsTouched, id]);
    setScore(score + 1);
    if (score >= bestScore) setBestScore(score + 1);
  };

  const cardWasTouched = (id) => {
    return cardsTouched.includes(id);
  };

  const reset = () => {
    setScore(0);
    setCardsTouched([]);
  };

  const playerWon = () => {
    return score === cards.length;
  };

  useEffect(() => {
    props.updateScore(score, bestScore);
  });

  return (
    <div className="game">
      {playerWon() ? (
        <ResetBtn reset={reset} />
      ) : (
        <Cards cards={cards} touchCard={touchCard} />
      )}
    </div>
  );
};

export default Game;
