import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './gameboard.css';
import CARD_DATA from './cardData';
import Card from '../card/card.jsx';

function Gameboard(props) {
  const { cardCount, incrementScore, resetCurrentScore } = props;

  const [cardOrder, setCardOrder] = useState([...Array(cardCount).keys()]);
  const [selections, setSelections] = useState([]);

  /**
   * Randomizes card order each time a card is selected using Fisher-Yates shuffle.
   */
  useEffect(() => {
    const newCardOrder = [...cardOrder];

    for (let i = cardCount - 1; i > 0; i -= 1) {
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
        resetCurrentScore();
      } else {
        newSelections.push(id);
        incrementScore();
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

Gameboard.propTypes = {
  cardCount: PropTypes.number.isRequired,
  incrementScore: PropTypes.func.isRequired,
  resetCurrentScore: PropTypes.func.isRequired,
};

export default Gameboard;
