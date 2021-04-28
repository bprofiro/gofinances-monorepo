import FakeTransactionRepository from '../repositories/TransactionRepository';
import CreateTransactionService from './CreateTransactionService';

let fakeTransactionRepository: FakeTransactionRepository;
let createTransaction: CreateTransactionService;

describe('CreateTransaction', () => {
  beforeEach(() => {
    fakeTransactionRepository = new FakeTransactionRepository();

    createTransaction = new CreateTransactionService(
      fakeTransactionRepository,
    );
  });

  it('should be able to create a new transaction', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => new Date(2020, 4, 10, 12).getTime());

    const transaction = await createTransaction.execute({
      date: new Date(),
      title: 'test',
      type: 'income',
      user_id: 'user-id',
      value: 100,
    });

    expect(transaction).toHaveProperty('id');
    expect(transaction.title).toBe('test');
  });

  it('should NOT be able to create two transactions with same code', async () => {
    await createTransaction.execute({
      date: new Date(),
      title: 'test',
      type: 'income',
      user_id: 'user-id',
      value: 100,
    });

    await expect(
      createTransaction.execute({
        date: new Date(),
        title: 'test',
        type: 'income',
        user_id: 'user-id',
        value: 100,
      }),
    ).toBe('E-mail and password combination is wrong');
  });
});
