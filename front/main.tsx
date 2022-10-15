import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './store/reducers';

export const store = configureStore({
  reducer: reducers,
});

const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    rootEl,
  );

render();
store.subscribe(render);
