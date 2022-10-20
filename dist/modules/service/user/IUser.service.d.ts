export declare type ICreateUserInput = {
    matricula: string;
    email: string;
    name: string;
    password: string;
    curso: string;
};
export declare type ICreateUserOutput = {
    matricula: string;
    email: string;
    name: string;
    ecryptedPassword?: string | undefined;
    curso: string;
};
