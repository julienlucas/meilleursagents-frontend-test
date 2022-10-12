import React, { useEffect } from 'react';
import MailList from '../../components/MailList/MailList';
import { useParams, useNavigate } from 'react-router-dom';
import { SMessage, SMessageHeader, SMessageBody, SMailContainer } from './style';
import Layout from '../../components/Layout/Layout';
import { getSelectedMessageUC, setMessageReadedUC } from '../../../domain/usecases/messages.usecase'
import { Store } from '../../../domain/entities/store.interface';
import { useStore } from '../../../store';

const Message: React.FC = () => {
  const [state, dispatch] = useStore<Store>({});
  const { selectedMessage } = state;
  const { messageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (messageId) {
      getSelectedMessageUC(state.selectedRealtorId, messageId, dispatch);
      setMessageReadedUC(state.selectedRealtorId, messageId, dispatch);
    }
  }, [messageId]);

  useEffect(() => {
    const setDefaultMailURL = () => {
      if (!messageId && state.messages.length > 0) {
        navigate(`/realtors/${state.selectedRealtorId}/messages/${state.messages[0].id}`)
      }
    };

    setDefaultMailURL();
  }, [state.messages]);

  return (
      <Layout>
        <SMessage>
          <MailList />
          <SMailContainer>
            <SMessageHeader>
              {selectedMessage?.contact?.firstname && (
                <h3>{selectedMessage?.contact?.firstname} {selectedMessage?.contact?.lastname}</h3>
              )}
              <ul>
                {selectedMessage?.contact?.email && (
                  <li>
                    Email <span>{selectedMessage?.contact?.email}</span>
                  </li>
                )}
                {selectedMessage?.contact?.phone && (
                  <li>
                    Phone <span>{selectedMessage?.contact?.phone}</span>
                  </li>
                )}
              </ul>
            </SMessageHeader>
            <SMessageBody>
              <h3>
                {selectedMessage?.contact?.firstname}
                {selectedMessage?.contact?.lastname}
              </h3>

              <p>{selectedMessage?.date}</p>
              {selectedMessage?.body && (
                <div dangerouslySetInnerHTML={{__html: selectedMessage?.body}} />
              )}
            </SMessageBody>
          </SMailContainer>
        </SMessage>
      </Layout>
  );
};

export default Message;
