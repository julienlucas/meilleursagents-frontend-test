import MessagesGateway from '../../infrastructure/MessagesGateway';
import { Message } from '../entities/message.interface';
import { setMessages, setSelectedMessage } from '../../store';

export async function getMessages(realtorId: string, dispatch: React.Dispatch<any>): Promise<Message> {
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

export async function getSelectedMessage(realtorId: string, messageId: string, dispatch: React.Dispatch<any>): Promise<Message> {
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

export async function setDefaultSelectedMessage(realtorId: string, dispatch: any) {
  const messages = await getMessages(realtorId, dispatch);

  dispatch(setSelectedMessage(messages[0]));
}
