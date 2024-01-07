import React from 'react';

function Header(props) {
  const { theme, onSetTheme } = props;

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
            <i class="fa-regular fa-moon"></i>
          ) : (
            <i class="fa-solid fa-moon"></i>
          )}

          <span>{theme} Mode</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
