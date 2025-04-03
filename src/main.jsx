import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoadingProvider } from './context/LoadingContext';
import './App.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoadingProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoadingProvider>
);