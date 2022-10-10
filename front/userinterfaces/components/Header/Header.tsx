import React from 'react';
import MailBox from '../MailBox/MailBox';
import Switch from '../Switch/Switch';
import LogoAviv from '../../../../images/logo-aviv.png';
import { SHeader, SLogo } from './style';

const Header = () => {
  return (
    <SHeader>
      <SLogo>
        <img src={LogoAviv} title="" alt="" />
      </SLogo>
      <MailBox />
      <Switch />
    </SHeader>
  );
};

export default Header;
