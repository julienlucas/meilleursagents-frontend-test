import React, { useEffect } from 'react';
import { Store } from '../../../domain/entities/store.interface';
import { getMessages } from '../../../domain/usecases/messages.usecase'
import { getFomatedDate } from '../../../services/helpers'
import { SAsideMailsList, SMail } from './style';
import { useStore } from '../../../store';

const AsideMailsList = () => {
  const [state, dispatch] = useStore<Store>({});

  useEffect(() => {
    getMessages("101", dispatch)
  }, []);

  return (
    <SAsideMailsList>
      {state.messages?.map(message =>
        <SMail key={message.id}>
          <h3>{message.contact?.firstname} {message.contact?.lastname}</h3>
          <p className="date">{getFomatedDate(message.date)}</p>
          <p>Email {message.id}</p>
          <p>{message.body.split(' ').slice(0,12).join(' ')}</p>
        </SMail>
      )}
    </SAsideMailsList>
  );
};

export default AsideMailsList;
