import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginPage />
  </BrowserRouter>
);