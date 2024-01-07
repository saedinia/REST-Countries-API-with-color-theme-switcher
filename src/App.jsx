import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode');
  return (
    <div className={`body-inner ${theme}`}>
      <div class="main-container"></div>
    </div>
  );
}

export default App;
