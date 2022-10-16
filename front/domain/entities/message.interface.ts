export interface Message {
  body?: string;
  contact: {
    email: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
  };
  date: Date;
  id: number;
  read: boolean;
  subject: string;
  type: string;
}
