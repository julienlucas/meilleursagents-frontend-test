import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Realtor } from '../entities/realtor.interface';
import { setRealtors, setUnreadCount } from '../../store';

export async function getRealtorsUC(realtorId: string, dispatch: React.Dispatch<any>): Promise<Realtor> {
  const realtorsGateway = RealtorsGateway.getInstance();

  try {
    const realtors = await realtorsGateway.getRealtors();
    const count = realtors.filter(realtor => realtor.id === Number(realtorId))[0].unread_messages;

    dispatch(setRealtors(realtors));
    dispatch(setUnreadCount(count));
    return realtors;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
