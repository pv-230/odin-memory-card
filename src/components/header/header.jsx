import React from 'react';
import './header.css';
import HelpIcon from './help-icon.svg';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Memory Game</h1>
      <img className="header__help-icon" src={HelpIcon} alt="Help icon" />
    </header>
  );
}

export default Header;
