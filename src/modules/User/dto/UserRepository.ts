interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IFindUserByIdDTO {
    id: string;
}

export { ICreateUserDTO, IFindUserByIdDTO };