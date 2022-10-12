import React from 'react';
import Header from '../Header/Header';
import { SLayout } from './style';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SLayout>
      <Header />
      {children}
    </SLayout>
  );
};

export default Layout;
