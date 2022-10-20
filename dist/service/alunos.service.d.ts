import { Aluno } from "src/model/aluno.model";
export declare class AlunosService {
    alunos: Aluno[];
    listaAlunos(): Aluno[];
    getAluno(id: number): Aluno;
    createAluno(aluno: Aluno): Aluno;
    updateAluno(id: number, aluno: Aluno): Aluno;
    deleteAluno(id: number): Aluno;
}
