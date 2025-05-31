import * as readline from 'readline';

import { Pessoa } from './Pessoa.js';

// Cria a classe Aluno que usa tudo da classe Pessoa
export class Aluno extends Pessoa {
  
  // Construtor: recebe nome, idade e matrícula
  constructor(public nome: string, public idade: number, public matricula: string) {
    super(nome, idade);
  }

  // Mostra os dados do aluno
  exibirDados(): void {
    console.log(`\n--- Dados do Aluno ---`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade} anos`);
    console.log(`Matrícula: ${this.matricula}`);
  }
}

export function executarClasseAluno(rl: readline.Interface, menu: () => void): void {

  // Pede o nome do aluno
  rl.question("Digite o nome do aluno: ", (nome: string) => {

    // Pede a idade
    rl.question("Digite a idade do aluno: ", (idadeStr: string) => {
      const idade = parseInt(idadeStr); // Transforma a idade em número

      // Se a idade não for válida, volta pro menu
      if (isNaN(idade)) {
        console.log("Idade inválida. Digite um número inteiro.");
        return menu();
      }

      // Pede a matrícula
      rl.question("Digite a matrícula do aluno: ", (matricula: string) => {

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
