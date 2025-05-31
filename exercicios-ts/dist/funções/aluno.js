"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
exports.executarClasseAluno = executarClasseAluno;
const Pessoa_js_1 = require("./Pessoa.js");
// Cria a classe Aluno que usa tudo da classe Pessoa
class Aluno extends Pessoa_js_1.Pessoa {
    // Construtor: recebe nome, idade e matrícula
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
    // Mostra os dados do aluno
    exibirDados() {
        console.log(`\n--- Dados do Aluno ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Matrícula: ${this.matricula}`);
    }
}
exports.Aluno = Aluno;
function executarClasseAluno(rl, menu) {
    // Pede o nome do aluno
    rl.question("Digite o nome do aluno: ", (nome) => {
        // Pede a idade
        rl.question("Digite a idade do aluno: ", (idadeStr) => {
            const idade = parseInt(idadeStr); // Transforma a idade em número
            // Se a idade não for válida, volta pro menu
            if (isNaN(idade)) {
                console.log("Idade inválida. Digite um número inteiro.");
                return menu();
            }
            // Pede a matrícula
            rl.question("Digite a matrícula do aluno: ", (matricula) => {
                // Cria o aluno com os dados digitados
                const aluno = new Aluno(nome, idade, matricula);
                // Mostra os dados do aluno
                aluno.exibirDados();
                // Espera o usuário apertar ENTER para voltar
                rl.question("Aperte ENTER para voltar ao menu.", () => {
                    menu(); // Volta pro menu
                });
            });
        });
    });
}
