"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controler_1 = require("./modules/controller/users.controler");
const prisma_service_1 = require("./modules/service/prisma/prisma.service");
const User_service_1 = require("./modules/service/user/User.service");
const HashProvider_1 = require("./provider/hashProvider/HashProvider");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, users_controler_1.UsersController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, User_service_1.UserService, HashProvider_1.default],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map