import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card(props) {
  const { id, imgPath, description, handleCardSelect, gameOver } = props;

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
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleCardSelect: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Card;
