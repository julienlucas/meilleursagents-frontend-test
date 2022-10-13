import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Realtor } from '../entities/realtor.interface';
import { setRealtors, setUnreadCount, setSelectedRealtorId } from '../../store';

export async function getRealtorsUC(
  realtorId: string,
  dispatch: React.Dispatch<any>,
): Promise<Realtor> {
  const realtorsGateway = RealtorsGateway.getInstance();

  try {
    const realtors = await realtorsGateway.getRealtors();
    const count = realtors.filter((realtor) => realtor.id === Number(realtorId))[0]
      .unread_messages;

    dispatch(setRealtors(realtors));
    dispatch(setUnreadCount(count));
    return realtors;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function setSelectedRealtorUC(
  realtorId: string,
  dispatch: React.Dispatch<any>,
): void {
  try {
    dispatch(setSelectedRealtorId(realtorId));
    localStorage.setItem('selectedRealtorId', realtorId.toString());
  } catch (error) {
    console.error(error);
    throw error;
  }
}
