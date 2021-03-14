/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';

class Onboard {
  id: string;

  user_id: string;

  date: Date;

  constructor({
    date, user_id,
  }: Omit<Onboard, 'id'>) {
    this.id = uuid();
    this.user_id = user_id;
    this.date = date;
  }
}

export default Onboard;
