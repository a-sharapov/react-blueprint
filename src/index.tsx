import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
