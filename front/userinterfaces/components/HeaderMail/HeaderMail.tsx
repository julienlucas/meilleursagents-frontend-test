import React from 'react';
import { SHeaderMail } from './style';
import { Recipient } from '../../../interfaces/components/recipient.interface';

interface HeaderMailProps {
  recipient: Recipient;
}

const HeaderMail = ({ recipient }: HeaderMailProps) => {
  return (
    <SHeaderMail>
      {recipient?.firstName && (
        <h3>
          {recipient?.firstName}
          {recipient?.lastName}
        </h3>
      )}
      <ul>
        {recipient?.email && (
          <li>
            Email <span>{recipient.email}</span>
          </li>
        )}
        {recipient?.phone && (
          <li>
            Phone <span>{recipient.phone}</span>
          </li>
        )}
      </ul>
    </SHeaderMail>
  );
};

export default HeaderMail;
