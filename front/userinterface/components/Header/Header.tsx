import React from 'react';
import ButtonUnreadCounter from '../ButtonUnreadCounter/ButtonUnreadCounter';
import SwitchRealtors from '../SwitchRealtors/SwitchRealtors';
import { SHeader, SLogo, SRightHeader } from './style';
const LogoAviv = '../../../../images/logo-aviv.png';

const Header: React.FC = () => {
  return (
    <SHeader>
      <SLogo>
        <img src={LogoAviv} title="" alt="" />
      </SLogo>
      <SRightHeader>
        <ButtonUnreadCounter />
        <SwitchRealtors />
      </SRightHeader>
    </SHeader>
  );
};

export default Header;
