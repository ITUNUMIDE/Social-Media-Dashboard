import React, { useState } from 'react';
import './DarkModeSwitch.css';

import sunIcon from "../../assets/icons/favicon.png"; // Light mode icon (Sun)
import moonIcon from "../../assets/icons/favicon.png"; // Dark mode icon (Moon)

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div 
      tabIndex="0" 
      onClick={toggleDarkMode} 
      className={`dark-mode-toggle ${darkMode ? 'dark-mode-enabled' : ''}`}
    >
      <div className="toggle-circle"></div>
      <img 
        src={sunIcon} 
        alt="Light Mode Icon" 
        className="icon icon-sun"
      />
      <img 
        src={moonIcon} 
        alt="Dark Mode Icon" 
        className="icon icon-moon"
      />
    </div>
  );
};

export default DarkModeSwitch;
