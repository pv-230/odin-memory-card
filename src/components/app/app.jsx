import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './app.css';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import HelpModal from '../helpModal/helpModal.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [appClassName, setAppClassName] = useState('app loading');
  const [showHelp, setShowHelp] = useState(false);
  const [flashRed, setFlashRed] = useState(false);
  const [flashGreen, setFlashGreen] = useState(false);

  /**
   * Hides the main content until all resources have loaded.
   */
  useEffect(() => {
    function doneLoading() {
      setLoading(false);
      setAppClassName('app');
    }

    if (document.readyState === 'complete') {
      doneLoading();
    } else {
      window.addEventListener('load', doneLoading);
    }

    return () => window.removeEventListener('load', doneLoading);
  }, []);

  /**
   * Flashes the background of the app to green or red based on user actions.
   */
  useEffect(() => {
    if (flashRed) {
      setAppClassName(`${appClassName} app_red`);
      setTimeout(() => {
        setFlashRed(false);
        setAppClassName(appClassName.replace(' app_red', ''));
      }, 300);
    } else if (flashGreen) {
      setAppClassName(`${appClassName} app_green`);
      setTimeout(() => {
        setFlashGreen(false);
        setAppClassName(appClassName.replace(' app_green', ''));
      }, 300);
    }
  }, [flashRed, flashGreen]);

  /**
   * Toggles the display of the help modal.
   */
  function toggleHelpModal() {
    setShowHelp(!showHelp);
  }

  /**
   * Flashes the background red.
   */
  function flashRedColor() {
    setFlashRed(true);
  }

  /**
   * Flashes the background red.
   */
  function flashGreenColor() {
    setFlashGreen(true);
  }

  return (
    <>
      {loading && <div className="spinner" />}
      <div className={appClassName}>
        <Header toggleHelpModal={toggleHelpModal} />
        <div className="main-content">
          <Main showHelp={showHelp} flashRed={flashRedColor} flashGreen={flashGreenColor} />
          {showHelp && <HelpModal toggleHelpModal={toggleHelpModal} />}
        </div>
      </div>
    </>
  );
}

export default App;
