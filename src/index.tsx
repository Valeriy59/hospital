import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
