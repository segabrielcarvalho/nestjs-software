import { User } from "@prisma/client";
import { UserService } from "../service/user/User.service";
export declare class AlunosController {
    private alunos;
    constructor(alunos: UserService);
    listaAlunos(): Promise<User[]>;
}
