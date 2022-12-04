import React from 'react';
import PropTypes from 'prop-types';
import './scoreboard.css';

function Scoreboard(props) {
  const { cardCount, currentScore, highScore } = props;

  return (
    <div className="scoreboard">
      <div className="scoreboard__current-score">
        Current score: {currentScore}/{cardCount}
      </div>
      <div className="scoreboard__high-score">
        High score: {highScore}/{cardCount}
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  cardCount: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Scoreboard;
