"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
exports.executarClassePessoa = executarClassePessoa;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibirDados() {
        console.log(`\n--- Dados da Pessoa ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
    }
}
exports.Pessoa = Pessoa;
function executarClassePessoa(rl, menu) {
    rl.question("Digite o nome da pessoa: ", (nome) => {
        rl.question("Digite a idade da pessoa: ", (idadeStr) => {
            const idade = parseInt(idadeStr);
            if (isNaN(idade)) {
                console.log("Idade inválida. Digite um número inteiro.");
                return menu();
            }
            const pessoa = new Pessoa(nome, idade);
            pessoa.exibirDados();
            menu();
        });
    });
}
