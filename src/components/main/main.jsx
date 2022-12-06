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
  const [gameOver, setGameOver] = useState(false);

  /**
   * Increments the current score by one and adjusts the high score and game over status if needed.
   */
  function incrementScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highScore) setHighScore(newScore);
    if (newScore === 12) setGameOver(true);
  }

  /**
   * Resets the current score.
   */
  function resetCurrentScore() {
    setCurrentScore(0);
  }

  /**
   * Resets the game.
   */
  function resetGame() {
    setCurrentScore(0);
    setHighScore(0);
    setGameOver(false);
  }

  return (
    <main className={showHelp ? 'main blurred' : 'main'}>
      <Scoreboard
        cardCount={CARD_COUNT}
        currentScore={currentScore}
        highScore={highScore}
        gameOver={gameOver}
        resetGame={resetGame}
      />
      <Gameboard
        cardCount={CARD_COUNT}
        incrementScore={incrementScore}
        resetCurrentScore={resetCurrentScore}
        gameOver={gameOver}
      />
    </main>
  );
}

Main.propTypes = {
  showHelp: PropTypes.bool.isRequired,
};

export default Main;
