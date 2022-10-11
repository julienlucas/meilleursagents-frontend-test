import React, { useState } from 'react';
import { SMailBox } from './style';
// import IconMail from '../../../assets/icon-mail.svg'

const MailBox = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <SMailBox>
      <p>gdfgdd</p>
      {/* {IconMail} */}
      {count}
    </SMailBox>
  );
};

export default MailBox;
