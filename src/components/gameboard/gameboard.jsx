import React, { useState } from 'react';
import './gameboard.css';
import CARD_DATA from './cardData';

function Gameboard() {
  const [cardOrder, setCardOrder] = useState([...Array(16).keys()]);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="gameboard">
      {cardOrder.map((value) => {
        const currentCard = CARD_DATA[value];
        return (
          <div className="card" key={currentCard.id}>
            {currentCard.description}
          </div>
        );
      })}
    </div>
  );
}

Gameboard.propTypes = {};

export default Gameboard;
