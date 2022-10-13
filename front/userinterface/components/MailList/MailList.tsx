import React, { useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Store } from '../../../domain/entities/store.interface';
import { getMessagesUC, getMessagesPaginatedUC } from '../../../domain/usecases/messages.usecase'
import { getFomatedDate } from '../../../services/helpers'
import useInfiniteScroll from '../../../services/hooks/useInfiniteScroll'
import { SMailList, SMail, SSms } from './style';
import { useStore } from '../../../store';

const MailList = () => {
  const [state, dispatch] = useStore<Store>({});
  const { selectedRealtorId, page } = state;
  const navigate = useNavigate();
  const { loadMoreRef } = useInfiniteScroll();

  useEffect(() => {
    if (selectedRealtorId) {
      getMessagesUC(selectedRealtorId, dispatch);
    }
  }, [selectedRealtorId]);

  useEffect(() => {
    if (page > 2) {
      getMessagesPaginatedUC(selectedRealtorId, `page=${page}`, dispatch);
    }
  }, [page]);

  useEffect(() => {
    console.log(state.messages)
  }, [state.messages]);


  const messages = useMemo(() => {
    if (state.messages) {
      return (
        <>
          {state.messages?.map(message => {
            if (message.type === "email") {
              return (
                <SMail
                  key={message.id}
                  readStatus={message.read}
                  onClick={() => navigate(`/realtors/${state.selectedRealtorId}/messages/${message.id}`)}
                >
                  <h3>{message.contact?.firstname} {message.contact?.lastname}</h3>
                  <p className="date">{getFomatedDate(message.date)}</p>
                  <p>Email {message.id}</p>
                  {console.log(message.read)}
                  <p>{message.body.split(' ').slice(0,12).join(' ')}</p>
                </SMail>
              )
            }
            if (message.type === "sms") {
              return (
                <SSms
                  key={message.id}
                  readStatus={message.read}
                  onClick={() => navigate(`/realtors/${state.selectedRealtorId}/messages/${message.id}`)}
                >
                  <h3>{message.contact?.firstname} {message.contact?.lastname}</h3>
                  <p className="date">{getFomatedDate(message.date)}</p>
                  <p>{message.subject}</p>
                </SSms>
              )
            }
          })}
          <div ref={loadMoreRef} />
        </>
      )
    }
  }, [state.messages])

  return (
    <SMailList>
      {messages}
    </SMailList>
  );
};

export default MailList;
