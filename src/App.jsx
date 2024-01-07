import { useState } from 'react';
import Header from './assets/components/Header';

function App() {
  const [theme, setTheme] = useState('Light');
  const onSetTheme = (value) => {
    setTheme(value);
  };
  return (
    <div className={`body-inner ${theme.toLowerCase()}-mode`}>
      <div class="main-container">
        <Header theme={theme} onSetTheme={onSetTheme} />
      </div>
    </div>
  );
}

export default App;
