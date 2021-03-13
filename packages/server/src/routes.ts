import express from 'express';

import UserRepository from './repositories/UserRepository';
import CreateUserService from './services/CreateUserService';
import AuthenticateUserService from './services/AuthenticateUserService';

const routes = express.Router();

const userRepository = new UserRepository();

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

export default routes;
