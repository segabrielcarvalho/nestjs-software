import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./modules/controller/users.controler";
import { PrismaService } from "./modules/service/prisma/prisma.service";
import { UserService } from "./modules/service/user/User.service";
import HashProvider from "./provider/hashProvider/HashProvider";

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService, UserService, HashProvider],
})
export class AppModule {}
