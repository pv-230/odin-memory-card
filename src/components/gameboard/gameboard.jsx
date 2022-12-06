import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './gameboard.css';
import Card from '../card/card.jsx';

function Gameboard(props) {
  const { cardCount, incrementScore, resetCurrentScore, gameOver } = props;

  const [cardOrder, setCardOrder] = useState([...Array(cardCount).keys()]);
  const [selections, setSelections] = useState([]);

  /**
   * Randomizes card order each time a card is selected or when the game is reset.
   */
  useEffect(() => {
    // Prevents shuffling after the last card of the game.
    if (gameOver) return;

    const newCardOrder = [...cardOrder];

    // Fisher-Yates shuffle
    for (let i = cardCount - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCardOrder[i], newCardOrder[j]] = [newCardOrder[j], newCardOrder[i]];
    }

    setCardOrder(newCardOrder);
  }, [selections, gameOver]);

  /**
   * Clears card selections if the game is over.
   */
  useEffect(() => {
    if (gameOver) setSelections([]);
  }, [gameOver]);

  /**
   * Event handler for card selection.
   */
  function handleCardSelect(id) {
    let newSelections = [...selections];

    if (selections.includes(id)) {
      // Reset selections if duplicate card was clicked
      newSelections = [];
      resetCurrentScore();
    } else {
      newSelections.push(id);
      incrementScore();
    }

    setSelections(newSelections);
  }

  return (
    <div className="gameboard">
      {cardOrder.map((value) => (
        <Card key={value} order={value} gameOver={gameOver} handleCardSelect={handleCardSelect} />
      ))}
    </div>
  );
}

Gameboard.propTypes = {
  cardCount: PropTypes.number.isRequired,
  incrementScore: PropTypes.func.isRequired,
  resetCurrentScore: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Gameboard;
