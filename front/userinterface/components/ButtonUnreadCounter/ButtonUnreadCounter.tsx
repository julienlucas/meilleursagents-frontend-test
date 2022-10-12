import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SButtonUnreadCounter } from './style';
import { Store } from '../../../domain/entities/store.interface';
import { Message } from '../../../domain/entities/message.interface';
import { useStore } from '../../../store';
import { getMessagesUC, setUnreadCountUC } from '../../../domain/usecases/messages.usecase';
const IconCounter = new URL('../../../../assets/icon-counter.svg', import.meta.url).href;

const ButtonUnreadCounter: React.FC = () => {
  const { messageId } = useParams();
  const [state, dispatch] = useStore<Store>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const { unreadCount } = state;

  useEffect(() => {
    if (state.messages.length > 0) {
      setMessages(state.messages)
    }
  }, [state.messages]);

  useEffect(() => {
    setUnreadCountUC(messages, dispatch);
  }, [messages, messageId]);

  return (
    <SButtonUnreadCounter>
      <span><img src={IconCounter} alt="" title="" /> {unreadCount}</span>
    </SButtonUnreadCounter>
  );
};

export default ButtonUnreadCounter;
