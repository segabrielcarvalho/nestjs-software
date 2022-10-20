import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { User } from "@prisma/client";
import {
  ICreateUserInput,
  ICreateUserOutput,
  IDInput,
  IUpdateUserInput,
} from "../service/user/IUser.service";
import { UserService } from "../service/user/User.service";

@Controller("/users")
@Injectable()
export class UsersController {
  constructor(private alunos: UserService) {}

  @Get("/list")
  listaAlunos(): Promise<User[]> {
    return this.alunos.listaAlunos();
  }

  @Get("/get/:id")
  getAluno(@Param() params: IDInput): Promise<User> {
    return this.alunos.getOneUser(params);
  }

  @Post("/create")
  createAluno(@Body() args: ICreateUserInput): Promise<ICreateUserOutput> {
    return this.alunos.createOneUser(args);
  }

  @Put("/update/:id")
  updateAluno(
    @Param() params: IDInput,
    @Body() args: IUpdateUserInput
  ): Promise<User> {
    return this.alunos.updateAluno({ id: params.id, ...args });
  }

  @Delete("/delete/:id")
  deleteAluno(@Param() params: IDInput): Promise<User> {
    return this.alunos.deleteAluno(params);
  }
}
