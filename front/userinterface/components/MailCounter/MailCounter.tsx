import React from 'react';
import { SMailCounter } from './style';
import { Store } from '../../../domain/entities/store.interface';
import { useStore } from '../../../store';
// import IconMail from '../../../assets/icon-mail.svg'

const MailCounter: React.FC = () => {
  const [state, dispatch] = useStore<Store>({});

  return (
    <SMailCounter>
      <p>gdfgdd</p>
      {/* {IconMail} */}
      {state?.count}
    </SMailCounter>
  );
};

export default MailCounter;
