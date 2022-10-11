import SingletonMixin from './SingletonMixin';
import { Realtor } from '../domain/entities/realtor.interface';
import { Message } from '../domain/entities/message.interface';

export default class RealtorsGateway extends SingletonMixin() {
  async getRealtors (): Promise<Realtor> {

    try {
      const res = await fetch(process.env.PUBLIC_API_ENTRYPOINT);
      const data = await res.json();

      return data;
    } catch (err) {
      throw(err);
    }
  }

  async getMessages (realtorId): Promise<Message> {
    try {
      const res = await fetch(`http://localhost:8080/realtors/${realtorId}/messages`);
      const data = await res.json();

      return data;
    } catch (err) {
      throw(err);
    }
  }
}