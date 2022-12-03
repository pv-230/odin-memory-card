import React, { useState } from 'react';
import './gameboard.css';
import CARD_DATA from './cardData';
import Card from '../card/card.jsx';

function Gameboard() {
  const [cardOrder, setCardOrder] = useState([...Array(16).keys()]);
  const [selectedCard, setSelectedCard] = useState(null);

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
          />
        );
      })}
    </div>
  );
}

Gameboard.propTypes = {};

export default Gameboard;
