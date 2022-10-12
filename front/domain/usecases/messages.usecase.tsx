import MessagesGateway from '../../infrastructure/MessagesGateway';
import { Message } from '../entities/message.interface';
import { setMessages, setSelectedMessage, setUnreadCount } from '../../store';

export async function getMessagesUC(realtorId: string, dispatch: React.Dispatch<any>): Promise<Message> {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    const messages = await messagesGateway.getMessages(realtorId);

    dispatch(setMessages(messages));
    return messages
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSelectedMessageUC(realtorId: string, messageId: string, dispatch: React.Dispatch<any>): Promise<Message> {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    const message = await messagesGateway.getSelectedMessage(realtorId, messageId);

    dispatch(setSelectedMessage(message));
    return message
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function setDefaultSelectedMessageUC(realtorId: string, dispatch: React.Dispatch<any>) {
  const messages = await getMessages(realtorId, dispatch);

  dispatch(setSelectedMessage(messages[0]));
}

export async function setMessageStatusAsReadedUC(realtorId: string, messageId: string, dispatch) {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    await messagesGateway.setMessageStatusAsReaded(realtorId, messageId);
    getMessagesUC(realtorId,dispatch);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function setUnreadCountUC(messages, dispatch: React.Dispatch<any>) {
  try {
    const count = messages.filter(message => message.read === false).length;

    dispatch(setUnreadCount(count));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

