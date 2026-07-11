import React, { useState, useEffect } from 'react';
import './App.css';
import Portfolio from './home';
import AllProjects from './projects';

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  return (
    <>
      {currentRoute === '#/projects' ? (
        <AllProjects />
      ) : (
        <Portfolio />
      )}
    </>
  );
}

export default App;
