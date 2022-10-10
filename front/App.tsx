import React from 'react';
// import ContextProvider from './context';
import Layout from './userinterfaces/components/Layout/Layout';
import Messages from './userinterfaces/pages/Messages/Messages';
import { recipient } from './services/constants';
import './services/globalstyles/index.css';

function App() {
  return (
    <Layout>
      <Messages recipient={recipient} />
    </Layout>
  );
}

export default App;
