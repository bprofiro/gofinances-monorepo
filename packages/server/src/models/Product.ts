/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';

class Product {
  id: string;

  name: string;

  price: number;

  code: string;

  quantity: number;

  user_id: string;

  constructor({
    name, price, user_id, code, quantity,
  }: Omit<Product, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.code = code;
    this.quantity = quantity;
    this.price = price;
    this.user_id = user_id;
  }
}

export default Product;
