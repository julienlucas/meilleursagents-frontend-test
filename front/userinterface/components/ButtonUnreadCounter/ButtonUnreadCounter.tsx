import React from 'react';
import { SButtonUnreadCounter } from './style';
import { useStore } from '../../../store';
const IconCounter = '../../../../assets/icon-counter.svg';

const ButtonUnreadCounter: React.FC = () => {
  const [state] = useStore();
  const { unreadCount } = state;

  return (
    <SButtonUnreadCounter count={unreadCount}>
      <span>
        <img src={IconCounter} alt="" title="" /> {unreadCount}
      </span>
    </SButtonUnreadCounter>
  );
};

export default ButtonUnreadCounter;
