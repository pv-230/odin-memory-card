import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import CARD_DATA from './cardData';

function Card(props) {
  const { order, handleCardSelect, gameOver } = props;
  const { id, imgPath, description } = CARD_DATA[order];

  return (
    <button
      className={gameOver ? 'card disabled' : 'card'}
      onClick={() => handleCardSelect(id)}
      type="button"
      disabled={gameOver}
    >
      <img className="card__image" src={imgPath} alt={`Card ${id}`} />
      <span className="card__description">{description}</span>
    </button>
  );
}

Card.propTypes = {
  order: PropTypes.number.isRequired,
  handleCardSelect: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Card;
