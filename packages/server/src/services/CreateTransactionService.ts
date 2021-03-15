import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionRepository';

class CreateTransaction {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public async execute({
    title,
    type,
    value,
    user_id: userId,
    date,
  }: Omit<Transaction, 'id'>): Promise<Transaction> {
    const [, , total] = await this.transactionRepository.getBalance(userId);

    if (type === 'outcome' && total.value < value) {
      throw new Error('You do not have money enough to do this transaction');
    }

    const transaction = await this.transactionRepository.create({
      title,
      type,
      value: type === 'outcome' ? value * -1 : value,
      user_id: userId,
      date,
    });

    return transaction;
  }
}

export default CreateTransaction;
