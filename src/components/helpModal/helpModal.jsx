import React from 'react';
import PropTypes from 'prop-types';
import './helpModal.css';
import Modal from '../modal/modal.jsx';

function HelpModal(props) {
  const { toggleHelpModal } = props;

  return (
    <Modal title="How to play" handleClose={toggleHelpModal}>
      <div className="help-modal">
        <p>
          The goal of the game is to click on all of the cards <strong>once</strong>.
        </p>
        <p>The cards will be shuffled each time a card is clicked.</p>
        <p>Your current score represents how many unique cards have been clicked in a row.</p>
      </div>
    </Modal>
  );
}

HelpModal.propTypes = {
  toggleHelpModal: PropTypes.func.isRequired,
};

export default HelpModal;
