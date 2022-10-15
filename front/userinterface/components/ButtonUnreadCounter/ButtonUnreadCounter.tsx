import React from 'react';
import { SButtonUnreadCounter } from './style';
import { useTypedSelector } from '../../../store/store';
const IconCounter = '../../../../assets/icon-counter.svg';

const ButtonUnreadCounter: React.FC = () => {
  const state = useTypedSelector((state) => state);
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
