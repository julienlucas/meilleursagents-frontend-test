import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Realtor } from '../entities/realtor.interface';
import { setRealtors } from '../../store';

export async function getRealtors(dispatch: any): Promise<Realtor> {
  const realtorsGateway = RealtorsGateway.getInstance();

  try {
    const data = await realtorsGateway.getRealtors();

    dispatch(setRealtors(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}