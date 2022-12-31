import { User } from "@prisma/client";
import { prisma } from "@shared/database/prisma";
import { ICreateUserDTO, IFindUserByIdDTO } from "../dto/UserRepository";
import { IUserRepository } from "./UserRepository.interface";

class UserRepository implements IUserRepository{
    async findById({
        id,
    }: IFindUserByIdDTO): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        return user;                
    }

    async create(data: ICreateUserDTO): Promise<User> {
        const user = await prisma.user.create({
            data: {
                ...data,
            },
        });

        return user;
    }

}

export { UserRepository }