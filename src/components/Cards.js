import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

import Card from "./Card";
import "../styles/Cards.css";

const Cards = (props) => {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const get = () => {
    let shuffledCards = shuffleArray(props.cards);
    let cards = [];
    for (let card of shuffledCards) {
      cards.push(
        <Card
          key={uniqid()}
          info={card.info}
          id={card.id}
          img={card.img}
          touchCard={props.touchCard}
        />
      );
    }
    return cards;
  };

  let cards = get();

  return <div className="cards">{cards}</div>;
};

export default Cards;
