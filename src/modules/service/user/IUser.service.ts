export type ICreateUserInput = {
  matricula: string;
  email: string;
  name: string;
  password: string;
  curso: string;
};

export type IDInput = {
  id: string;
  matricula: string;
};

export type ICreateUserOutput = {
  matricula: string;
  email: string;
  name: string;
  ecryptedPassword?: string | undefined;
  curso: string;
};

export type IUpdateUserInput = {
  id: string;
  matricula?: string;
  email?: string;
  name?: string;
  curso?: string;
};
