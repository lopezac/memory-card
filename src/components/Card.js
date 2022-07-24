import React, { useEffect, useState } from "react";

import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" onClick={props.touchCard.bind(this, props.id)}>
      <img
        className="card-img"
        src={`./assets/${props.img}`}
        alt={props.info}
      />
      <p className="card-info">{props.info}</p>
    </div>
  );
};

export default Card;
