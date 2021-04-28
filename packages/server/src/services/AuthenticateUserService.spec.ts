import FakeUsersRepository from '../repositories/UserRepository';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      balance: 0,
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should NOT be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).toBe('E-mail and password combination is wrong');
  });

  it('should NOT be able to authenticate with a wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      balance: 0,
    });

    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: 'wrongpassword',
      }),
    ).toBe('E-mail and password combination is wrong');
  });
});
