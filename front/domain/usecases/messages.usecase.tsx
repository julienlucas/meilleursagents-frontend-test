import MessagesGateway from '../../infrastructure/MessagesGateway';
import { getRealtorsUC } from '../../domain/usecases/realtors.usecase';
import { Message } from '../entities/message.interface';
import { setMessages, setMessagesPaginated, setSelectedMessage } from '../../store';

export async function getMessagesUC(
  realtorId: string,
  dispatch: React.Dispatch<any>,
): Promise<Message> {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    const messages = await messagesGateway.getMessages(realtorId);

    dispatch(setMessages(messages));
    return messages;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMessagesPaginatedUC(
  realtorId: string,
  params: any,
  dispatch: React.Dispatch<any>,
): Promise<Message> {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    const messages = await messagesGateway.getMessages(realtorId, params);

    // console.log(messages)

    dispatch(setMessagesPaginated(messages));
    return messages;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSelectedMessageUC(
  realtorId: string,
  messageId: string,
  dispatch: React.Dispatch<any>,
): Promise<Message> {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    const message = await messagesGateway.getSelectedMessage(realtorId, messageId);

    dispatch(setSelectedMessage(message));
    return message;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function setDefaultSelectedMessageUC(
  realtorId: string,
  dispatch: React.Dispatch<any>,
) {
  try {
    const messages = await getMessagesUC(realtorId, dispatch);

    dispatch(setSelectedMessage(messages[0]));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function setMessageReadedUC(realtorId: string, messageId: string, dispatch) {
  const messagesGateway = MessagesGateway.getInstance();

  try {
    await messagesGateway.setMessageReaded(realtorId, messageId);
    await getMessagesUC(realtorId, dispatch);

    getRealtorsUC(realtorId, dispatch);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
