import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Realtor } from '../entities/realtor.interface';
import { setRealtors } from '../../store';

export async function getRealtors(dispatch: React.Dispatch<any>): Promise<Realtor> {
  const realtorsGateway = RealtorsGateway.getInstance();

  try {
    const realtors = await realtorsGateway.getRealtors();

    dispatch(setRealtors(realtors));
    return realtors;
  } catch (error) {
    console.error(error);
    throw error;
  }
}