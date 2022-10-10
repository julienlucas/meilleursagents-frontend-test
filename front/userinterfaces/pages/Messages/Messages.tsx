import React from 'react';
import AsideMailsList from '../../components/SAsideMailsList/SAsideMailsList';
import { SMessages, SMailContainer } from './style';
import HeaderMail from '../../components/HeaderMail/HeaderMail';
import { Recipient } from '../../../interfaces/components/recipient.interface';
import { z } from 'zod';

interface MessagesProps {
  recipient: Recipient;
}

const Messages = ({ recipient }: MessagesProps) => {
  return (
    <SMessages>
      <AsideMailsList />

      <SMailContainer>
        <HeaderMail recipient={recipient} />
        <p>fdsfdsfsdfsdfds</p>

        {/* <section>
          {recipient?.firstName && (
            <h3>
              {recipient?.firstName}
              {recipient?.lastName}
            </h3>
          )}

          <p>{recipient.date}</p>
          {recipient?.message && (
            <div dangerouslySetInnerHTML={{__html: recipient.message}} />
          )}
        </section> */}
      </SMailContainer>
    </SMessages>
  );
};

export default Messages;
