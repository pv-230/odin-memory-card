import React from 'react';
import PropTypes from 'prop-types';
import './scoreboard.css';

function Scoreboard(props) {
  const { currentScore, highScore } = props;

  return (
    <div className="scoreboard">
      <div className="scoreboard__current-score">Current score: {currentScore}/16</div>
      <div className="scoreboard__high-score">High score: {highScore}/16</div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default Scoreboard;
