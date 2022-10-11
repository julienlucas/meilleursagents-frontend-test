import { Realtor } from './realtor.interface';
import { Message } from './message.interface';

export interface Store {
  messages: Message[],
  realtors: Realtor[]
}