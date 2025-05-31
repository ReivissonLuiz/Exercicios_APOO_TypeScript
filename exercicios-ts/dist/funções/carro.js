"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
exports.executarClasseCarro = executarClasseCarro;
// Classe Carro que segue a interface Veiculo
class Carro {
    constructor() {
        this.velocidade = 0; // Começa parado
    }
    // Acelera o carro
    acelerar() {
        this.velocidade += 10;
        console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
    }
    // Freia o carro
    frear() {
        this.velocidade -= 10;
        if (this.velocidade < 0)
            this.velocidade = 0; // Evita valor negativo
        console.log(`O carro freou. Velocidade atual: ${this.velocidade} km/h`);
    }
}
exports.Carro = Carro;
// Função para testar a classe Carro
function executarClasseCarro(rl, callback) {
    const carro = new Carro(); // Cria um novo carro
    console.clear(); // Limpa a tela
    console.log("Você está testando a classe Carro!");
    console.log("1. Acelerar");
    console.log("2. Frear");
    // Pergunta o que o usuário quer fazer
    rl.question("Escolha uma ação (1 ou 2): ", (opcao) => {
        switch (opcao) {
            case "1":
                carro.acelerar(); // Chama o método acelerar
                break;
            case "2":
                carro.frear(); // Chama o método frear
                break;
            default:
                console.log("Opção inválida."); // Se escolher algo errado
        }
        // Espera ENTER para voltar pro menu
        rl.question("\nAperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
