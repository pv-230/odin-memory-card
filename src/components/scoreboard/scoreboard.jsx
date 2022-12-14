import React from 'react';
import PropTypes from 'prop-types';
import './scoreboard.css';

function Scoreboard(props) {
  const { currentScore, highScore, gameOver, resetGame } = props;

  return (
    <div className="scoreboard">
      {gameOver ? (
        <>
          <span className="scoreboard__win-text">You won!</span>
          <button className="scoreboard__reset-btn" type="button" onClick={resetGame}>
            Reset
          </button>
        </>
      ) : (
        <>
          <div className="scoreboard__current-score">Current score: {currentScore}</div>
          <div className="scoreboard__high-score">High score: {highScore}</div>
        </>
      )}
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Scoreboard;
