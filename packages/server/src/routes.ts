import express from 'express';

import UserRepository from './repositories/UserRepository';
import OnboardRepository from './repositories/OnboardRepository';
import TransactionRepository from './repositories/TransactionRepository';
import ProductRepository from './repositories/ProductRepository';

import CreateUserService from './services/CreateUserService';
import AuthenticateUserService from './services/AuthenticateUserService';
import OnboardUserService from './services/OnboardUserService';
import CreateTransactionService from './services/CreateTransactionService';
import CreateProductService from './services/CreateProductService';

const routes = express.Router();

const userRepository = new UserRepository();
const onboardRepository = new OnboardRepository();
const transactionRepository = new TransactionRepository();
const productRepository = new ProductRepository();

routes.post('/users', async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      name,
      email,
      password,
      balance: 0,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/session', async (request, response) => {
  const { email, password } = request.body;

  try {
    const authenticateUserService = new AuthenticateUserService(userRepository);

    const session = await authenticateUserService.execute({ email, password });

    return response.json(session);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.get('/onboards/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const userOnboard = await onboardRepository.findById(id);

    return response.json(userOnboard);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/onboards/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const onboardUserService = new OnboardUserService(onboardRepository);

    const onboard = await onboardUserService.execute(id);

    return response.json(onboard);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.get('/products/:code', async (request, response) => {
  const { code } = request.params;

  const product = await productRepository.findByCode(code);

  response.json(product);
});

routes.get('/products/users/:id', async (request, response) => {
  const { id: userId } = request.params;

  const userProducts = await productRepository.findByUser(userId);

  response.json(userProducts);
});

routes.post('/products/users/', async (request, response) => {
  const {
    name, price, quantity, code, id: userId,
  } = request.body;

  try {
    const createProductService = new CreateProductService(
      productRepository,
    );

    const product = await createProductService.execute({
      name,
      price,
      quantity,
      code,
      user_id: userId,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.get('/transactions/:user_id', async (request, response) => {
  const { user_id: userId } = request.params;

  const userTransactions = await transactionRepository.findByUser(userId);
  const userBalance = await transactionRepository.getBalance(userId);

  return response.json({ userTransactions, userBalance });
});

routes.post('/transactions', async (request, response) => {
  const {
    user_id: userId, title, value, type,
  } = request.body;

  try {
    const createTransactionService = new CreateTransactionService(
      transactionRepository,
    );

    const transaction = await createTransactionService.execute({
      title,
      type,
      user_id: userId,
      value,
      date: new Date(),
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default routes;
