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
   * Toggles the display of the help modal.
   */
  function toggleHelpModal() {
    setShowHelp(!showHelp);
  }

  return (
    <>
      {loading && <div className="spinner">Loading</div>}
      <div className={appClassName}>
        <Header toggleHelpModal={toggleHelpModal} />
        <div className="main-content">
          <Main showHelp={showHelp} />
          {showHelp && <HelpModal toggleHelpModal={toggleHelpModal} />}
        </div>
      </div>
    </>
  );
}

export default App;
