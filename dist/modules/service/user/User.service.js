"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const HashProvider_1 = require("../../../provider/hashProvider/HashProvider");
const prisma_service_1 = require("../prisma/prisma.service");
const faker_1 = require("@faker-js/faker");
let UserService = class UserService {
    constructor(prisma, hashProvider) {
        this.prisma = prisma;
        this.hashProvider = hashProvider;
    }
    async listaAlunos() {
        const users = await this.prisma.user.findMany();
        users.forEach((user) => {
            delete user.encryptedPassword;
        });
        return users;
    }
    getOneAluno(matricula) {
        const user = this.prisma.user.findUnique({
            where: { matricula },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
    }
    async createAluno(args) {
        const encryptedPassword = args.password
            ? await this.hashProvider.generateHash(args.password)
            : await this.hashProvider.generateHash(faker_1.faker.internet.password(8));
        if (!encryptedPassword)
            throw new Error("Erro ao gerar senha automatica");
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
    updateAluno(id, args) {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: args,
        });
    }
    deleteAluno(id) {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        HashProvider_1.default])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=User.service.js.map