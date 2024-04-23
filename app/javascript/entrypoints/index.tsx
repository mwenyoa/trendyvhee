import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store';
import App from './App';
import { ShoppingCartProvider } from './components';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <main>
    <Provider store={store}>
      <HashRouter>
        <ShoppingCartProvider>
        <App />
        </ShoppingCartProvider>
      </HashRouter>
    </Provider>
    </main>
  </React.StrictMode>,
);