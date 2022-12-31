import { User } from '@modules/User/entities/User';

test('Create User', () => {
    const user = new User();

    user.name = "Root User";

    expect(user.name).toEqual('Root User');
})