import { User } from "@prisma/client";
import { ICreateUserDTO, IFindUserByIdDTO } from "../dto/UserRepository";

interface IUserRepository {
    findById(filter: IFindUserByIdDTO): Promise<User>;
    create(user: ICreateUserDTO): Promise<User>;
}

export { IUserRepository }