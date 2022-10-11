import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StoreProvider from './store';
import { initialState, storeReducers } from './store';
import Messages from './userinterface/pages/Messages/Messages';
import GlobalCSS from './services/globalstyles/index';

function App() {
  return (
    <Suspense fallback="loading">
      <StoreProvider initialState={initialState} reducer={storeReducers}>
        <GlobalCSS />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Messages />} />
            <Route path="/realtors" element={<Messages />}>
              <Route path="/realtors:id" element={<Messages />} />
              <Route path="/realtors/:id/messages/:id" element={<Messages />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  );
}

export default App;
