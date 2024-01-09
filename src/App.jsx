import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('Light');
  const onSetTheme = (value) => {
    setTheme(value);
  };

  return (
    <div className={`body-inner ${theme.toLowerCase()}-mode`}>
      <div className="main-container">
        <Header theme={theme} onSetTheme={onSetTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:alpha3code" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
