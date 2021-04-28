import FakeProductRepository from '../repositories/ProductRepository';
import FakeTransactionRepository from '../repositories/TransactionRepository';
import CreateProductService from './CreateProductService';

let fakeTransactionRepository: FakeTransactionRepository;
let fakeProductRepository: FakeProductRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductRepository();
    fakeTransactionRepository = new FakeTransactionRepository();

    createProduct = new CreateProductService(
      fakeProductRepository,
      fakeTransactionRepository,
    );
  });

  it('should be able to create a new product', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => new Date(2020, 4, 10, 12).getTime());

    const product = await createProduct.execute({
      user_id: 'user-id',
      code: '123456',
      name: 'product-test',
      price: 100,
      quantity: 1,
    });

    expect(product).toHaveProperty('id');
    expect(product.code).toBe('123456');
  });

  it('should NOT be able to create two products with same code', async () => {
    await createProduct.execute({
      user_id: 'user-id',
      code: '123456',
      name: 'product-test',
      price: 100,
      quantity: 1,
    });

    await expect(
      createProduct.execute({
        user_id: 'user-id',
        code: '123456',
        name: 'product-test',
        price: 100,
        quantity: 1,
      }),
    ).toBe('E-mail and password combination is wrong');
  });
});
