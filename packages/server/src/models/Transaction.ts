/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';

class Transaction {
  id: string;

  title: string;

  type: string;

  value: number;

  user_id: string;

  date: Date;

  constructor({
    title, user_id, type, value, date,
  }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.user_id = user_id;
    this.type = type;
    this.value = value;
    this.date = date;
  }
}

export default Transaction;
