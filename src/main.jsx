import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import './assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rest-countries-api-with-color-theme-switcher">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
