import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Message } from '../entities/message.interface';
import { setMessages } from '../../store';

export async function getMessages(realtorId: string, dispatch: any): Promise<Message> {
  const realtorsGateway = RealtorsGateway.getInstance();

  try {
    const data = await realtorsGateway.getMessages(realtorId);

    dispatch(setMessages(data));
    return data
  } catch (error) {
    console.error(error);
    throw error;
  }
}