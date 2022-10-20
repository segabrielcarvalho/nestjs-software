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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosController = void 0;
const common_1 = require("@nestjs/common");
const aluno_model_1 = require("../model/aluno.model");
const alunos_service_1 = require("../modules/service/alunos.service");
let AlunosController = class AlunosController {
    constructor(alunos) {
        this.alunos = alunos;
    }
    listaAlunos() {
        return this.alunos.listaAlunos();
    }
    getAluno(params) {
        return this.alunos.getAluno(params.id);
    }
    createAluno(args) {
        return this.alunos.createAluno(args);
    }
    updateAluno(params, args) {
        return this.alunos.updateAluno(params.id, args);
    }
    deleteAluno(params) {
        return this.alunos.deleteAluno(params.id);
    }
};
__decorate([
    (0, common_1.Get)("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AlunosController.prototype, "listaAlunos", null);
__decorate([
    (0, common_1.Get)("/get/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", aluno_model_1.Aluno)
], AlunosController.prototype, "getAluno", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", aluno_model_1.Aluno)
], AlunosController.prototype, "createAluno", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", aluno_model_1.Aluno)
], AlunosController.prototype, "updateAluno", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", aluno_model_1.Aluno)
], AlunosController.prototype, "deleteAluno", null);
AlunosController = __decorate([
    (0, common_1.Controller)("/alunos"),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [alunos_service_1.AlunosService])
], AlunosController);
exports.AlunosController = AlunosController;
//# sourceMappingURL=alunos.controler.js.map