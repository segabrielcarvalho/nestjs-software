import { User } from "@prisma/client";
import HashProvider from "../../../provider/hashProvider/HashProvider";
import { PrismaService } from "../prisma/prisma.service";
import { ICreateUserInput, ICreateUserOutput } from "./IUser.service";
export declare class UserService {
    private prisma;
    private hashProvider;
    constructor(prisma: PrismaService, hashProvider: HashProvider);
    listaAlunos(): Promise<User[]>;
    getOneAluno(matricula: string): Promise<User>;
    createAluno(args: ICreateUserInput): Promise<ICreateUserOutput>;
    updateAluno(id: string, args: any): Promise<User>;
    deleteAluno(id: string): Promise<User>;
}
