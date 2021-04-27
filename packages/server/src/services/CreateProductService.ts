import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';
import TransactionRepository from '../repositories/TransactionRepository';

class CreateProduct {
  private productRepository: ProductRepository;

  private transactionRepository: TransactionRepository;

  constructor(productRepository: ProductRepository, transactionRepository: TransactionRepository) {
    this.productRepository = productRepository;
    this.transactionRepository = transactionRepository;
  }

  public async execute({
    name,
    price,
    code,
    quantity,
    user_id: userId,
  }: Omit<Product, 'id'>): Promise<Product> {
    const checkExistingProduct = await this.productRepository.findByCode(code);

    await this.transactionRepository.create({
      title: name,
      type: 'outcome',
      value: (price * quantity) * -1,
      user_id: userId,
      date: new Date(),
    });

    if (checkExistingProduct) {
      checkExistingProduct.quantity += quantity;

      return checkExistingProduct;
    }

    const product = await this.productRepository.create({
      name,
      code,
      price,
      quantity,
      user_id: userId,
    });

    return product;
  }
}

export default CreateProduct;
