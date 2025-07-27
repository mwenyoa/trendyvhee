import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store';
import App from './App';
import { ShoppingCartProvider } from './components';
import Header from './components/features/header';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ShoppingCartProvider>
        <App />
        </ShoppingCartProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);