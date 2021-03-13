import { hash } from 'bcryptjs';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

class CreateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    name,
    email,
    password,
  }: Omit<User, 'id'>): Promise<User> {
    const checkIfUserExists = this.userRepository.findByEmail(email);
    if (checkIfUserExists) {
      throw new Error('This e-mail is already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      balance: 0,
    });

    return user;
  }
}

export default CreateUserService;
