import React, { useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Store } from '../../../domain/entities/store.interface';
import { getMessagesUC } from '../../../domain/usecases/messages.usecase'
import { getFomatedDate } from '../../../services/helpers'
import { SMailList, SMail } from './style';
import { useStore } from '../../../store';

const MailList = () => {
  const [state, dispatch] = useStore<Store>({});
  const { selectedRealtorId } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedRealtorId) {
      getMessagesUC(selectedRealtorId, dispatch);
    }
  }, [selectedRealtorId]);

  const messages = useMemo(() => {
    if (state.messages) {
      return (
        state.messages?.map(message =>
          <SMail
            key={message.id}
            onClick={() => navigate(`/realtors/${state.selectedRealtorId}/messages/${message.id}`)}
          >
            <h3>{message.contact?.firstname} {message.contact?.lastname}</h3>
            <p className="date">{getFomatedDate(message.date)}</p>
            <p>Email {message.id}</p>
            <p>{message.body.split(' ').slice(0,12).join(' ')}</p>
          </SMail>
        )
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
