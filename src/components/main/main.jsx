import React, { useState } from 'react';
import './main.css';
import Scoreboard from '../scoreboard/scoreboard.jsx';

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <main className="main">
      <Scoreboard currentScore={currentScore} highScore={highScore} />
    </main>
  );
}

export default Main;
