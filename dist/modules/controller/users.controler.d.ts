import { User } from "@prisma/client";
import { ICreateUserInput, ICreateUserOutput } from "../service/user/IUser.service";
import { UserService } from "../service/user/User.service";
export declare class UsersController {
    private alunos;
    constructor(alunos: UserService);
    listaAlunos(): Promise<User[]>;
    createAluno(args: ICreateUserInput): Promise<ICreateUserOutput>;
}
