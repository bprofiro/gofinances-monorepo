import { v4 as uuid } from 'uuid';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  balance: number;

  constructor({ name, email, password, balance }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.balance = balance;
  }
}

export default User;
