import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card(props) {
  const { id, imgPath, description } = props;

  return (
    <div className="card">
      <img className="card__image" src={imgPath} alt={`Card ${id}`} />
      <span className="card__description">{description}</span>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
