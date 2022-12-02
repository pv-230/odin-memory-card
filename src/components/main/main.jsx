import React, { useState } from 'react';
import './main.css';
import Scoreboard from '../scoreboard/scoreboard.jsx';
import Gameboard from '../gameboard/gameboard.jsx';

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <main className="main">
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard />
    </main>
  );
}

export default Main;
