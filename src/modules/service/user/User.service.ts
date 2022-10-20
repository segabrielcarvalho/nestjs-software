import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import HashProvider from "../../../provider/hashProvider/HashProvider";
import { PrismaService } from "../prisma/prisma.service";
import {
  ICreateUserInput,
  ICreateUserOutput,
  IDInput,
  IUpdateUserInput,
} from "./IUser.service";
import { faker } from "@faker-js/faker";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private hashProvider: HashProvider
  ) {}

  async listaAlunos(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    users.forEach((user) => {
      delete user.encryptedPassword;
    });
    return users;
  }

  getOneUser(args: IDInput): Promise<User> {
    const { matricula } = args;
    const user = this.prisma.user.findUnique({
      where: { matricula },
    });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  async createOneUser(args: ICreateUserInput): Promise<ICreateUserOutput> {
    const encryptedPassword = args.password
      ? await this.hashProvider.generateHash(args.password)
      : await this.hashProvider.generateHash(faker.internet.password(8));
    if (!encryptedPassword) throw new Error("Erro ao gerar senha automatica");
    const user = await this.prisma.user.create({
      data: {
        matricula: args.matricula,
        email: args.email,
        name: args.name,
        curso: args.curso,
        encryptedPassword,
      },
    });
    delete user.encryptedPassword;
    return user;
  }

  updateAluno(args: IUpdateUserInput): Promise<User> {
    const { id } = args;
    const user = this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new Error("Usuário não encontrado");
    return this.prisma.user.update({
      where: { id },
      data: args,
    });
  }

  deleteAluno(args: IDInput): Promise<User> {
    const { id } = args;
    const user = this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new Error("Usuário não encontrado");
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
