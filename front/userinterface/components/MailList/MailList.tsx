import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getMessagesUC,
  getMessagesPaginatedUC,
} from '../../../domain/usecases/messages.usecase';
import { useAppDispatch, useTypedSelector } from '../../../store/store';
import { getFomatedDate } from '../../../services/helpers';
import useInfiniteScroll from '../../../services/hooks/useInfiniteScroll';
import { SMailList, SMail, SSms } from './style';

const MailList = () => {
  const navigate = useNavigate();
  const { loadMoreRef } = useInfiniteScroll();
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state);
  const { selectedRealtorId, page } = state;

  useEffect(() => {
    if (selectedRealtorId) {
      dispatch(getMessagesUC(selectedRealtorId));
    }
  }, [selectedRealtorId]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getMessagesPaginatedUC({ selectedRealtorId, params: `page=${page}` }));
    }
  }, [page]);

  const showMessageDetails = (message) => {
    navigate(`/realtors/${state.selectedRealtorId}/messages/${message.id}`, {
      state: { openMessageDetails: true },
    });
  };

  return (
    <SMailList>
      <>
        {state?.messages?.map((message) => {
          if (message.type === 'email') {
            return (
              <SMail
                key={message.id}
                readStatus={message.read}
                onClick={() => showMessageDetails(message)}
              >
                <h3>
                  {message.contact?.firstname} {message.contact?.lastname}
                </h3>
                <p className="date">{getFomatedDate(message.date)}</p>
                <p>Email {message.id}</p>
                <p className="body">{message?.body?.split(' ').slice(0, 12).join(' ')}</p>
              </SMail>
            );
          }
          if (message.type === 'sms' || message.type === 'phone') {
            return (
              <SSms
                key={message.id}
                readStatus={message.read}
                onClick={() =>
                  navigate(`/realtors/${state.selectedRealtorId}/messages/${message.id}`)
                }
              >
                <h3>
                  {message.contact?.firstname} {message.contact?.lastname}
                </h3>
                <p className="date">{getFomatedDate(message.date)}</p>
                <p>{message.subject}</p>
                <p className="body">{message.subject}</p>
              </SSms>
            );
          }
        })}
        <div ref={loadMoreRef} />
      </>
    </SMailList>
  );
};

export default MailList;
