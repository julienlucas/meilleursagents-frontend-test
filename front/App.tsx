import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StoreProvider from './store';
import { initialState, storeReducers } from './store';
import Message from './userinterface/pages/Message/Message';
import GlobalCSS from './services/globalstyles/index';

function App() {
  return (
    <Suspense fallback="loading">
      <StoreProvider initialState={initialState} reducer={storeReducers}>
        <GlobalCSS />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Message />} />
            <Route path="/realtors" element={<Message />}>
              <Route path="/realtors:realtorId" element={<Message />} />
              <Route
                path="/realtors/:realtorId/messages/:messageId"
                element={<Message />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  );
}

export default App;
