import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import CARD_DATA from './cardData';

function Card(props) {
  const { order, handleCardSelect, gameOver } = props;
  const { id, imgPath, name, binomial } = CARD_DATA[order];

  return (
    <button
      className={gameOver ? 'card disabled' : 'card'}
      onClick={() => handleCardSelect(id)}
      type="button"
      disabled={gameOver}
      tabIndex="0"
    >
      <figure className="card__figure">
        <img
          className={gameOver ? 'card__image grayscale' : 'card__image'}
          src={imgPath}
          alt={name}
        />
        <figcaption>
          <b>{name}</b>
          <br />
          <i>{binomial}</i>
        </figcaption>
      </figure>
    </button>
  );
}

Card.propTypes = {
  order: PropTypes.number.isRequired,
  handleCardSelect: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Card;
