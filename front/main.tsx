import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './store/reducers';

export const store = configureStore({
  reducer: reducers,
});

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root'),
  );

render();
store.subscribe(render);
