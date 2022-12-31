import { User } from '@modules/User/entities/User';
import 'reflect-metadata';
import { CreateUserService } from '@modules/User/services/CreateUser.service';

const createUserService = new CreateUserService();

test('Create User', async () => {

    const user = await createUserService.execute({
        name: 'John Doe',
        email: '',
        password: '',
    });
    const correctUser = new User();
    correctUser.name = 'John Doe';

    expect(user.name).toEqual(correctUser.name);
})