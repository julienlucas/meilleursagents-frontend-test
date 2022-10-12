import SingletonMixin from './SingletonMixin';
import { Message } from '../domain/entities/message.interface';

export default class MessagesGateway extends SingletonMixin() {
  async getMessages (realtorId: string): Promise<Message> {
    try {
      const res = await fetch(`http://localhost:8080/realtors/${realtorId}/messages`);
      const data = await res.json();

      return data;
    } catch (err) {
      throw(err);
    }
  }

  async getSelectedMessage (realtorId: string, messageId: string): Promise<Message> {
    try {
      const res = await fetch(`http://localhost:8080/realtors/${realtorId}/messages/${messageId}`);
      const data = await res.json();

      return data;
    } catch (err) {
      throw(err);
    }
  }
}