import User from '../models/User';

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email, password }: Omit<User, 'id'>): User {
    const user = new User({ name, email, password, balance: 0 });
    this.users.push(user);

    return user;
  }

  public findByEmail(email: string): User | undefined {
    const findUserByEmail = this.users.find(user => user.email === email);

    return findUserByEmail;
  }
}

export default UserRepository;
