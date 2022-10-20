import { User } from "@prisma/client";
import { IdArgs } from "../../args/id-args";
import { PrismaService } from "./prisma/prisma.service";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    listaAlunos(id: IdArgs): Promise<User[]>;
    getAluno(): void;
    createAluno(): void;
    updateAluno(): void;
    deleteAluno(): void;
}
