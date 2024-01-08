import React from 'react';

function Header({ theme, onSetTheme }) {
  const handleThemeMode = () => {
    theme === 'Light' ? onSetTheme('Dark') : onSetTheme('Light');
  };

  return (
    <header>
      <div className="header-inner wrapper">
        <div className="brand">
          <h3>Where in the world?</h3>
        </div>
        <div className="theme-mode" onClick={() => handleThemeMode()}>
          {theme === 'Light' ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}

          <span>{theme} Mode</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
