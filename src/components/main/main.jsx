import React, { useState, useCallback } from 'react';
import './main.css';
import Scoreboard from '../scoreboard/scoreboard.jsx';
import Gameboard from '../gameboard/gameboard.jsx';

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  /**
   * Increments the current score by one.
   */
  const incrementCurrentScore = useCallback(() => {
    setCurrentScore(currentScore + 1);
  }, [currentScore, setCurrentScore]);

  /**
   * Resets the current score.
   */
  const resetCurrentScore = useCallback(() => {
    setCurrentScore(0);
  }, [currentScore, setCurrentScore]);

  return (
    <main className="main">
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard
        incrementCurrentScore={incrementCurrentScore}
        resetCurrentScore={resetCurrentScore}
      />
    </main>
  );
}

export default Main;
