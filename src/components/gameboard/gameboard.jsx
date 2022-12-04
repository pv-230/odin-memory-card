import React, { useState, useEffect, useCallback } from 'react';
import './gameboard.css';
import CARD_DATA from './cardData';
import Card from '../card/card.jsx';

const CARD_COUNT = 12;

function Gameboard() {
  const [cardOrder, setCardOrder] = useState([...Array(CARD_COUNT).keys()]);
  const [selections, setSelections] = useState([]);

  /**
   * Randomizes card order each time a card is selected using Fisher-Yates shuffle.
   */
  useEffect(() => {
    const newCardOrder = [...cardOrder];

    for (let i = CARD_COUNT - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCardOrder[i], newCardOrder[j]] = [newCardOrder[j], newCardOrder[i]];
    }

    setCardOrder(newCardOrder);
  }, [selections]);

  /**
   * Event handler for card selection.
   */
  const handleCardSelect = useCallback(
    (id) => {
      let newSelections = [...selections];

      if (selections.includes(id)) {
        // Reset selections if duplicate card was clicked
        newSelections = [];
      } else {
        newSelections.push(id);
      }

      setSelections(newSelections);
    },
    [selections, setSelections]
  );

  return (
    <div className="gameboard">
      {cardOrder.map((value) => {
        const currentCard = CARD_DATA[value];
        return (
          <Card
            key={currentCard.id}
            id={currentCard.id}
            imgPath={currentCard.imgPath}
            description={currentCard.description}
            handleCardSelect={handleCardSelect}
          />
        );
      })}
    </div>
  );
}

Gameboard.propTypes = {};

export default Gameboard;
