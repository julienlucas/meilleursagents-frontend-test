import React from 'react';
import ButtonUnreadCounter from '../ButtonUnreadCounter/ButtonUnreadCounter';
import SwitchRealtors from '../SwitchRealtors/SwitchRealtors';
import { SHeader, SLogo, SRightHeader } from './style';
const LogoAviv = new URL('../../../../images/logo-aviv.png', import.meta.url).href

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
