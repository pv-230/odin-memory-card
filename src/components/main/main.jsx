import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import Scoreboard from '../scoreboard/scoreboard.jsx';
import Gameboard from '../gameboard/gameboard.jsx';

function Main(props) {
  const CARD_COUNT = 12;
  const { showHelp } = props;

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  /**
   * Increments the current score by one.
   */
  function incrementScore() {
    const newCurrentScore = currentScore + 1;
    let newHighScore = highScore;

    if (newCurrentScore > highScore) {
      newHighScore = newCurrentScore;
    }

    setCurrentScore(newCurrentScore);
    setHighScore(newHighScore);
  }

  /**
   * Resets the current score.
   */
  function resetCurrentScore() {
    setCurrentScore(0);
  }

  return (
    <main className={showHelp ? 'main blurred' : 'main'}>
      <Scoreboard cardCount={CARD_COUNT} currentScore={currentScore} highScore={highScore} />
      <Gameboard
        cardCount={CARD_COUNT}
        incrementScore={incrementScore}
        resetCurrentScore={resetCurrentScore}
      />
    </main>
  );
}

Main.propTypes = {
  showHelp: PropTypes.bool.isRequired,
};

export default Main;
