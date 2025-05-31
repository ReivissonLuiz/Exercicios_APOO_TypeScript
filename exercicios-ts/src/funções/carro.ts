// Interface que define o que um veículo deve ter
export interface Veiculo {
    acelerar(): void;
    frear(): void;
}

// Classe Carro que segue a interface Veiculo
export class Carro implements Veiculo {
    private velocidade: number; // Armazena a velocidade atual

    constructor() {
        this.velocidade = 0; // Começa parado
    }

    // Acelera o carro
    acelerar(): void {
        this.velocidade += 10;
        console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
    }

    // Freia o carro
    frear(): void {
        this.velocidade -= 10;
        if (this.velocidade < 0) this.velocidade = 0; // Evita valor negativo
        console.log(`O carro freou. Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Função para testar a classe Carro
export function executarClasseCarro(rl: any, callback: Function): void {
    const carro = new Carro(); // Cria um novo carro

    console.clear(); // Limpa a tela
    console.log("Você está testando a classe Carro!");
    console.log("1. Acelerar");
    console.log("2. Frear");

    // Pergunta o que o usuário quer fazer
    rl.question("Escolha uma ação (1 ou 2): ", (opcao: string) => {
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
