import React from 'react';
import PropTypes from 'prop-types';
import './helpModal.css';
import Modal from '../modal/modal.jsx';

function HelpModal(props) {
  const { toggleHelpModal } = props;

  return (
    <Modal title="Help" handleClose={toggleHelpModal}>
      Help modal
    </Modal>
  );
}

HelpModal.propTypes = {
  toggleHelpModal: PropTypes.func.isRequired,
};

export default HelpModal;
