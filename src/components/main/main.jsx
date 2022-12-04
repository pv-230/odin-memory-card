import React, { useState, useCallback } from 'react';
import './main.css';
import Scoreboard from '../scoreboard/scoreboard.jsx';
import Gameboard from '../gameboard/gameboard.jsx';

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const CARD_COUNT = 12;

  /**
   * Increments the current score by one.
   */
  const incrementScore = useCallback(() => {
    const newCurrentScore = currentScore + 1;
    let newHighScore = highScore;

    if (newCurrentScore > highScore) {
      newHighScore = newCurrentScore;
    }

    setCurrentScore(newCurrentScore);
    setHighScore(newHighScore);
  }, [currentScore, setCurrentScore]);

  /**
   * Resets the current score.
   */
  const resetCurrentScore = useCallback(() => {
    setCurrentScore(0);
  }, [currentScore, setCurrentScore]);

  return (
    <main className="main">
      <Scoreboard cardCount={CARD_COUNT} currentScore={currentScore} highScore={highScore} />
      <Gameboard
        cardCount={CARD_COUNT}
        incrementScore={incrementScore}
        resetCurrentScore={resetCurrentScore}
      />
    </main>
  );
}

export default Main;
