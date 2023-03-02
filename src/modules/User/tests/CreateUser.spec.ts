import { User } from '@modules/User/entities/User';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateUserService } from '../services/CreateUser.service';


test('Create User', async () => {
  const createUserService = container.resolve(CreateUserService);

  const user = await createUserService.execute({
    name: 'John Doe',
    email: '',
    password: '',
  });
  const correctUser = new User();
  correctUser.name = 'John Doe';

  expect(user.name).toEqual(correctUser.name);
})