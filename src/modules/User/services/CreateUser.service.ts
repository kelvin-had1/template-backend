import { plainToInstance } from "class-transformer";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dto/UserRepository";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/UserRepository.interface";

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute(data: ICreateUserDTO): Promise<User> {
        const user = await this.userRepository.create(data);

        return plainToInstance(User, user);

    }
}

export { CreateUserService }