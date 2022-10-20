import { User } from "@prisma/client";
import { PrismaService } from "./prisma/prisma.service";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    listaAlunos(): Promise<User[]>;
    getAluno(): void;
    createAluno(): void;
    updateAluno(): void;
    deleteAluno(): void;
}
