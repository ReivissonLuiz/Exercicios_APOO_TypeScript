"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
exports.executarClassePessoa = executarClassePessoa;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // Mostra os dados da pessoa no console
    exibirDados() {
        console.log(`\n--- Dados da Pessoa ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
    }
}
exports.Pessoa = Pessoa;
// Função para criar uma pessoa via perguntas e mostrar os dados
function executarClassePessoa(rl, menu) {
    rl.question("Digite o nome da pessoa: ", (nome) => {
        rl.question("Digite a idade da pessoa: ", (idadeStr) => {
            const idade = parseInt(idadeStr);
            // Verifica se a idade é válida
            if (isNaN(idade)) {
                console.log("Idade inválida. Digite um número inteiro.");
                return menu(); // Volta para o menu
            }
            const pessoa = new Pessoa(nome, idade);
            pessoa.exibirDados(); // Mostra dados da pessoa
            rl.question("Aperte ENTER para voltar ao menu.", () => {
                menu(); // Volta para o menu após ENTER
            });
        });
    });
}
