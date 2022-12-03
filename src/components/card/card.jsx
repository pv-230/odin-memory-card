import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card(props) {
  const { id, imgPath, description, handleCardSelect } = props;

  return (
    <button className="card" onClick={() => handleCardSelect(id)} type="button">
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
};

export default Card;
