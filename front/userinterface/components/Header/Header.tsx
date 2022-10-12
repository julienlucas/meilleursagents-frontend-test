import React from 'react';
import MailCounter from '../MailCounter/MailCounter';
import SwitchRealtors from '../SwitchRealtors/SwitchRealtors';
import LogoAviv from '../../../../images/logo-aviv.png';
import { SHeader, SLogo, SRightHeader } from './style';

const Header: React.FC = () => {
  return (
    <SHeader>
      <SLogo>
        <img src={LogoAviv} title="" alt="" />
      </SLogo>
      <SRightHeader>
        <MailCounter />
        <SwitchRealtors />
      </SRightHeader>
    </SHeader>
  );
};

export default Header;
