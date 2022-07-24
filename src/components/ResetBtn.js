import React from "react";

import "../styles/ResetBtn.css";

const ResetBtn = (props) => {
  return (
    <div className="won-game">
      <p className="congratulations">You won the game!</p>
      <button className="reset-btn" type="click" onClick={props.reset}>
        Restart
      </button>
    </div>
  );
};

export default ResetBtn;
