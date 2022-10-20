import { Aluno } from "../model/aluno.model";
import { AlunosService } from "../modules/service/alunos.service";
export declare class AlunosController {
    private alunos;
    constructor(alunos: AlunosService);
    listaAlunos(): Aluno[];
    getAluno(params: any): Aluno;
    createAluno(args: any): Aluno;
    updateAluno(params: any, args: any): Aluno;
    deleteAluno(params: any): Aluno;
}
