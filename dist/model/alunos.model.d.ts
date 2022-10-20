export declare class Aluno {
    constructor(args: IAlunoArgs);
    id: number;
    matricula: string;
    nome: string;
    email: string;
    curso: string;
    dataNascimento: Date;
}
declare type IAlunoArgs = {
    matricula: string;
    nome: string;
    email: string;
    curso: string;
    dataNascimento: Date;
};
export {};
