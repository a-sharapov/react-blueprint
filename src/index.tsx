import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
/*eslint-disable */
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onRegisterError(error) {},
  onNeedRefresh() {},
  onOfflineReady() {}
});
/* eslint-enable */

const root = ReactDOM.createRoot(document.querySelector('main#app-root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
