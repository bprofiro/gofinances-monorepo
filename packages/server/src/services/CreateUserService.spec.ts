import FakeUsersRepository from '../repositories/UserRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(
      fakeUsersRepository,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      balance: 0,
    });

    expect(user).toHaveProperty('id');
  });

  it('should NOT be able to create a two users with same email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      balance: 0,
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
        balance: 0,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
