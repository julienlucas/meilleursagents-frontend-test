import React, { useEffect } from 'react';
import MailList from '../../components/MailList/MailList';
import { useParams, useNavigate } from 'react-router-dom';
import { SMessages, SMessage, SHeaderMessage, SMailContainer } from './style';
import Layout from '../../components/Layout/Layout';
import { getSelectedMessage, setDefaultSelectedMessage } from '../../../domain/usecases/messages.usecase'
import { Store } from '../../../domain/entities/store.interface';
import { useStore } from '../../../store';

const Messages: React.FC = () => {
  const [state, dispatch] = useStore<Store>({});
  const { selectedMessage } = state;
  const { messageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (messageId && (messageId !== state.selectedMessageId)) {
      getSelectedMessage(state.selectedRealtorId, messageId, dispatch)
    }
  }, [messageId]);

  useEffect(() => {
    if (!messageId && state.messages.length > 0) {
      navigate(`/realtors/${state.selectedRealtorId}/messages/${state.messages[0].id}`)
    }
  }, [state.messages])

  return (
      <Layout>
        <SMessages>
          <MailList />
          <SMailContainer>
            <SHeaderMessage>
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
            </SHeaderMessage>
            <SMessage>
              <h3>
                {selectedMessage?.contact?.firstname}
                {selectedMessage?.contact?.lastname}
              </h3>

              <p>{selectedMessage?.date}</p>
              {selectedMessage?.body && (
                <div dangerouslySetInnerHTML={{__html: selectedMessage?.body}} />
              )}
            </SMessage>
          </SMailContainer>
        </SMessages>
      </Layout>
  );
};

export default Messages;
