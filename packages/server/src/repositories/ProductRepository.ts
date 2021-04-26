import Product from '../models/Product';

class ProductRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  public create({
    name,
    price,
    code,
    quantity,
    user_id: userId,
  }: Omit<Product, 'id'>): Product {
    const product = new Product({
      name,
      price,
      code,
      quantity,
      user_id: userId,
    });

    console.log({ productRepositoy: product });

    this.products.push(product);

    return product;
  }

  public async findByUser(userId: string): Promise<Product[]> {
    const products = this.products.filter(
      (productItem) => productItem.user_id === userId && productItem.quantity > 0,
    );

    return products;
  }

  public async findByCode(code: string): Promise<Product | undefined> {
    const product = this.products.find(
      (productItem) => productItem.code === code,
    );

    return product;
  }
}

export default ProductRepository;
