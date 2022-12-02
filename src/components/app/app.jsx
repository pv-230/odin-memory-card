import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './app.css';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [appClassName, setAppClassName] = useState('app loading');

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

  return (
    <>
      {loading && <div className="spinner">Loading</div>}
      <div className={appClassName}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
