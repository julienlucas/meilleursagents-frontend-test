import React from 'react';
import MailBox from '../MailBox/MailBox';
import SwitchRealtors from '../SwitchRealtors/SwitchRealtors';
import LogoAviv from '../../../../images/logo-aviv.png';
import { SHeader, SLogo, SMailBox, SSwitchRealtors } from './style';

const Header = () => {
  return (
    <SHeader>
      <SLogo>
        <img src={LogoAviv} title="" alt="" />
      </SLogo>
      <SSwitchRealtors>
        <MailBox />
        <SwitchRealtors />
      </SSwitchRealtors>
    </SHeader>
  );
};

export default Header;
