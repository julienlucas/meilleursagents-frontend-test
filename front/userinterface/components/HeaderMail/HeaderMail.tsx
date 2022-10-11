import React from 'react';
import { SHeaderMail } from './style';
import { Message } from '../../../domain/entities/message.interface';

interface HeaderMailProps {
  message: Message;
}

const HeaderMail = ({ message }: HeaderMailProps) => {
  return (
    <SHeaderMail>
      {message?.contact.firstname && (
        <h3>
          {message?.contact?.firstname}
          {message?.contact?.lastname}
        </h3>
      )}
      <ul>
        {message?.contact?.email && (
          <li>
            Email <span>{message?.contact?.email}</span>
          </li>
        )}
        {message?.contact?.phone && (
          <li>
            Phone <span>{message?.contact?.phone}</span>
          </li>
        )}
      </ul>
    </SHeaderMail>
  );
};

export default HeaderMail;
