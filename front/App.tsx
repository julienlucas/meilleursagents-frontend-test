import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Message from './userinterface/pages/Message/Message';
import GlobalCSS from './services/globalstyles/index';
import { Provider } from 'react-redux';

function App({ store }) {
  return (
    <Provider store={store}>
      <Suspense fallback="loading">
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
      </Suspense>
    </Provider>
  );
}

export default App;
