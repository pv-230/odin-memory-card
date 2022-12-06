import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import HelpIcon from './help-icon.svg';

function Header(props) {
  const { toggleHelpModal } = props;

  return (
    <header className="header">
      <h1 className="header__title">Animal Cards</h1>
      <button className="header__help-btn" type="button" onClick={toggleHelpModal} tabIndex="0">
        <img className="header__help-icon" src={HelpIcon} alt="Help icon" />
      </button>
    </header>
  );
}

Header.propTypes = {
  toggleHelpModal: PropTypes.func.isRequired,
};

export default Header;
