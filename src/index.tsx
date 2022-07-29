import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onOfflineReady() {},
});

const root = ReactDOM.createRoot(document.querySelector('main#app-root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
