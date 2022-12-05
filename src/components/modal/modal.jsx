import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal(props) {
  const { title, handleClose } = props;

  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal__title-bar">
          <span className="modal__title">{title}</span>
          <button className="modal__close-btn" type="button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="modal__children-wrapper">
          {/* eslint-disable-next-line */}
          {props.children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
