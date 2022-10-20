"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
const aluno_model_1 = require("../model/aluno.model");
let AlunosService = class AlunosService {
    constructor() {
        this.alunos = [
            new aluno_model_1.Aluno({
                matricula: "01",
                nome: "Gabriel Fernandes ",
                email: "gabriel@email.com",
                curso: "Engenharia de Software",
                dataNascimento: new Date("2003-01-01"),
            }),
            new aluno_model_1.Aluno({
                matricula: "02",
                nome: "Rodrigo Verissimo",
                email: "rodrigo@email.com",
                curso: "Ciência da Computação",
                dataNascimento: new Date("2000-01-01"),
            }),
            new aluno_model_1.Aluno({
                matricula: "03",
                nome: "João da Silva",
                email: "joão@email.com",
                curso: "Análise e Desenvolvimento de Sistemas",
                dataNascimento: new Date("2004-01-01"),
            }),
        ];
    }
    listaAlunos() {
        return this.alunos;
    }
    getAluno(id) {
        return this.alunos[id];
    }
    createAluno(aluno) {
        this.alunos.push(aluno);
        return aluno;
    }
    updateAluno(id, aluno) {
        this.alunos[id] = aluno;
        return aluno;
    }
    deleteAluno(id) {
        this.alunos.splice(id, 1);
        return this.alunos[id];
    }
};
AlunosService = __decorate([
    (0, common_1.Injectable)()
], AlunosService);
exports.AlunosService = AlunosService;
//# sourceMappingURL=alunos.service.js.map