import { ICreateUserDTO } from "../dto/UserRepository";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class CreateUserService extends UserRepository{
    constructor() {
        super();
    }

    async execute(data: ICreateUserDTO): Promise<User> {
        const user = await this.create(data);

        return user;

    }
}

export { CreateUserService }