import React from 'react';
import AsideMailsList from '../../components/AsideMailsList/AsideMailsList';
import { SMessages, SMessage, SMailContainer } from './style';
import Layout from '../../components/Layout/Layout';
import HeaderMail from '../../components/HeaderMail/HeaderMail';
import { Message } from '../../../domain/entities/message.interface';
import { z } from 'zod';

const Messages = () => {
  return (
      <Layout>
        <SMessages>
          <AsideMailsList />

          <SMailContainer>
            <HeaderMail />
            <SMessage>
              <p>fdsfdsfsdfsdfds</p>
            </SMessage>

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
      </Layout>
  );
};

export default Messages;
