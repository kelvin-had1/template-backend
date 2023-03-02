import { plainToInstance } from "class-transformer";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dto/UserRepository";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/UserRepository.interface";
import bcrypt from 'bcrypt';
@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ICreateUserDTO): Promise<User> {
    const encryptedPassword = await bcrypt.hash(data.password, 8);

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: encryptedPassword,
    });

    return plainToInstance(User, user);

  }
}

export { CreateUserService }