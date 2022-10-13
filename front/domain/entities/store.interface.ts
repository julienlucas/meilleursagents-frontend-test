import { Realtor } from './realtor.interface';
import { Message } from './message.interface';

export interface Store {
  messages: Message[];
  realtors: Realtor[];
  selectedRealtorId: string;
  selectedMessageId: string;
  selectedMessage: Message | null;
  unreadCount: number;
  page: number;
}
