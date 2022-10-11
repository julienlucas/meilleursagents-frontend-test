import React from 'react';
import Header from '../Header/Header';
import { SLayout } from './style';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SLayout>
      <Header />
      {children}
    </SLayout>
  );
};

export default Layout;
