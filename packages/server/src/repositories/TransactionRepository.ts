import Transaction from '../models/Transaction';

interface Balance {
  type: string;
  date?: Date;
  value: number;
}

class TransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public create({
    title,
    type,
    user_id: userId,
    value,
    date,
  }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({
      title,
      type,
      user_id: userId,
      value,
      date,
    });

    this.transactions.push(transaction);

    return transaction;
  }

  public async findByUser(userId: string): Promise<Transaction[]> {
    const transactions = this.transactions.filter(
      (transaction) => transaction.user_id === userId,
    );

    return transactions;
  }

  public async getBalance(userId: string): Promise<Balance[]> {
    const userBalance = await this.findByUser(userId);

    let income = {
      type: 'Entrada',
      value: 0,
      date: new Date(),
    };

    let outcome = {
      type: 'Saída',
      value: 0,
      date: new Date(),
    };

    let total = {
      type: 'Total',
      value: 0,
    };

    if (userBalance.length) {
      const incomeValue = userBalance
        .filter((transaction) => transaction.type === 'income')
        .reduce((totalValue, transaction) => totalValue + transaction.value, 0);

      const outcomeValue = userBalance
        .filter((transaction) => transaction.type === 'outcome')
        .reduce((totalValue, transaction) => totalValue + transaction.value, 0);

      const totalValue = incomeValue + outcomeValue;

      income = {
        type: 'Entrada',
        value: incomeValue,
        date: userBalance[userBalance.length - 1].date,
      };

      outcome = {
        type: 'Saída',
        value: outcomeValue,
        date: userBalance[userBalance.length - 1].date,
      };

      total = {
        type: 'Total',
        value: totalValue,
      };
    }

    return [income, outcome, total];
  }
}

export default TransactionRepository;
