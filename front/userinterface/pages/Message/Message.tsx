import React, { useEffect } from 'react';
import moment from 'moment';
import MailList from '../../components/MailList/MailList';
import { useParams, useNavigate } from 'react-router-dom';
import { SMessage, SMessageHeader, SMessageBody, SMailContainer } from './style';
import Layout from '../../components/Layout/Layout';
import { getSelectedMessageUC, setMessageReadedUC, setDefaultSelectedMessageUC } from '../../../domain/usecases/messages.usecase'
import { Store } from '../../../domain/entities/store.interface';
import { useStore } from '../../../store';

const Message: React.FC = () => {
  const [state, dispatch] = useStore<Store>({});
  const { selectedMessage } = state;
  const { realtorId, messageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (messageId) {
      getSelectedMessageUC(state.selectedRealtorId, messageId, dispatch);
      setMessageReadedUC(state.selectedRealtorId, messageId, dispatch);
    }
    if (realtorId && !messageId) {
      setDefaultSelectedMessageUC(realtorId, dispatch);
    }
  }, [realtorId, messageId]);

  useEffect(() => {
    const setDefaultMailURL = () => {
      if (!messageId && state.messages.length > 0) {
        navigate(`/realtors/${state.selectedRealtorId}/messages/${state.selectedMessageId}`)
      }
    };

    setDefaultMailURL();
  }, [state.selectedMessageId]);

  return (
      <Layout>
        <>
          <MailList />
          <SMessage>
            <SMailContainer>
              <SMessageHeader>
                {selectedMessage?.contact?.firstname && (
                  <h3>{selectedMessage?.contact?.firstname} {selectedMessage?.contact?.lastname}</h3>
                )}
                <ul>
                  {selectedMessage?.contact?.email && (
                    <li>
                      Email <a href={`mailto:${selectedMessage?.contact?.email}`}>{selectedMessage?.contact?.email}</a>
                    </li>
                  )}
                  {selectedMessage?.contact?.phone && (
                    <li>
                      Phone <a href={`tel:${selectedMessage?.contact?.phone}`}>{selectedMessage?.contact?.phone}</a>
                    </li>
                  )}
                </ul>
              </SMessageHeader>
              <SMessageBody>
                <h3>
                  {selectedMessage?.contact?.firstname}
                  {selectedMessage?.contact?.lastname}
                </h3>

                <p>{moment(selectedMessage?.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                {selectedMessage?.body && (
                  <div dangerouslySetInnerHTML={{__html: selectedMessage?.body}} />
                )}
              </SMessageBody>
            </SMailContainer>
          </SMessage>
        </>
      </Layout>
  );
};

export default Message;
