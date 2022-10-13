import SingletonMixin from './SingletonMixin';
import { Message } from '../domain/entities/message.interface';

export default class MessagesGateway extends SingletonMixin() {
  async getMessages(realtorId: string, params: any): Promise<Message> {
    try {
      const res = await fetch(
        `${process.env
          .PUBLIC_API_ENTRYPOINT!}${realtorId}/messages?sort=date:desc&${params}`,
      );
      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  }

  async getSelectedMessage(realtorId: string, messageId: string): Promise<Message> {
    try {
      const res = await fetch(
        `${process.env.PUBLIC_API_ENTRYPOINT!}${realtorId}/messages/${messageId}`,
      );
      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  }

  setMessageReaded(realtorId: string, messageId: string): void {
    try {
      fetch(`${process.env.PUBLIC_API_ENTRYPOINT!}${realtorId}/messages/${messageId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          read: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
