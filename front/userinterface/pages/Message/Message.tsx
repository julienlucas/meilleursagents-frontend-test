import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import MailList from '../../components/MailList/MailList';
import useWindowSize from '../../../services/hooks/useWindowSize';
import {
  SMessage,
  SMessageHeader,
  SMessageBody,
  SMailContainer,
  SCloseButton,
} from './style';
import Layout from '../../components/Layout/Layout';
import {
  getSelectedMessageUC,
  setMessageReadedUC,
  setDefaultSelectedMessageUC,
} from '../../../domain/usecases/messages.usecase';
import { useAppDispatch, useTypedSelector } from '../../../store/store';

const Message: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const width = useWindowSize();
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state);
  const { selectedMessage, selectedRealtorId } = state;
  const [open, setOpen] = useState<boolean>(false);
  const [showCloseButton, setShowCloseButton] = useState<boolean>(true);
  const { realtorId, messageId } = useParams();

  useEffect(() => {
    if (messageId && realtorId) {
      dispatch(getSelectedMessageUC({ selectedRealtorId, messageId }));
      dispatch(setMessageReadedUC({ realtorId, messageId }));
    }
    if (realtorId && !messageId) {
      dispatch(setDefaultSelectedMessageUC(realtorId));
    }
  }, [realtorId, messageId]);

  useEffect(() => {
    const setDefaultMailURL = () => {
      if (!messageId && state.messages.length > 0) {
        navigate(
          `/realtors/${state.selectedRealtorId}/messages/${state.selectedMessageId}`,
        );
      }
    };

    setDefaultMailURL();
  }, [state.selectedMessageId]);

  useEffect(() => {
    if (location.state?.openMessageDetails) {
      setOpen(true);
    }
  }, [location]);

  useEffect(() => {
    if (width < 580) {
      setOpen(false);
      setShowCloseButton(true);
    } else {
      setOpen(true);
      setShowCloseButton(false);
    }
  }, [width]);

  return (
    <Layout>
      <>
        <MailList />
        {open && (
          <SMessage>
            <SMailContainer>
              <SMessageHeader>
                {showCloseButton && (
                  <SCloseButton onClick={() => setOpen(false)}>
                    <span>X</span>
                  </SCloseButton>
                )}

                {selectedMessage?.contact?.firstname && (
                  <h3>
                    {selectedMessage?.contact?.firstname}{' '}
                    {selectedMessage?.contact?.lastname}
                  </h3>
                )}
                <ul>
                  {selectedMessage?.contact?.email && (
                    <li>
                      <span>
                        <p>Email</p>{' '}
                        <a href={`mailto:${selectedMessage?.contact?.email}`}>
                          {selectedMessage?.contact?.email}
                        </a>
                      </span>
                    </li>
                  )}
                  {selectedMessage?.contact?.phone && (
                    <li>
                      <span>
                        <p>Phone</p>{' '}
                        <a href={`tel:${selectedMessage?.contact?.phone}`}>
                          {selectedMessage?.contact?.phone}
                        </a>
                      </span>
                    </li>
                  )}
                </ul>
              </SMessageHeader>
              <SMessageBody>
                <h2>
                  {selectedMessage?.contact?.firstname}{' '}
                  {selectedMessage?.contact?.lastname}
                </h2>

                <p className="date">
                  {moment(selectedMessage?.date).format('MMMM Do YYYY, h:mm a')}
                </p>
                {selectedMessage?.body && (
                  <div dangerouslySetInnerHTML={{ __html: selectedMessage?.body }} />
                )}
              </SMessageBody>
            </SMailContainer>
          </SMessage>
        )}
      </>
    </Layout>
  );
};

export default Message;
