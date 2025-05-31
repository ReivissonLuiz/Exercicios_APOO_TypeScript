import * as readline from 'readline';

export class Pessoa {
  constructor(public nome: string, public idade: number) {}

  // Mostra os dados da pessoa no console
  exibirDados(): void {
    console.log(`\n--- Dados da Pessoa ---`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade} anos`);
  }
}

// Função para criar uma pessoa via perguntas e mostrar os dados
export function executarClassePessoa(rl: readline.Interface, menu: () => void): void {
  rl.question("Digite o nome da pessoa: ", (nome: string) => {
    rl.question("Digite a idade da pessoa: ", (idadeStr: string) => {
      const idade = parseInt(idadeStr);

      // Verifica se a idade é válida
      if (isNaN(idade)) {
        console.log("Idade inválida. Digite um número inteiro.");
        return menu(); // Volta para o menu
      }

      const pessoa = new Pessoa(nome, idade);
      pessoa.exibirDados(); // Mostra dados da pessoa

      rl.question("Aperte ENTER para voltar ao menu.", () =>{
        menu(); // Volta para o menu após ENTER
      });
    });
  });
}
