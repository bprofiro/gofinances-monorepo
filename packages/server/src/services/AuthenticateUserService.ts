import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface RespquestAuthentication {
  email: string;
  password: string;
}

interface ResponseAuthentication {
  user: User;
  token: string;
}

class AuthenticateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    email,
    password,
  }: RespquestAuthentication): Promise<ResponseAuthentication> {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('This e-mail does not exists');
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new Error('E-mail and password combination is wrong');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, { subject: user.id, expiresIn });

    return { user, token };
  }
}

export default AuthenticateUserService;
