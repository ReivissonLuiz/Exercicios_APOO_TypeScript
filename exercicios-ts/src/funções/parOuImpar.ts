import * as readline from 'readline';

export function parOuImpar(rl: readline.Interface, callback: () => void): void {
    // Pergunta um número inteiro
    rl.question("Digite um número inteiro: ", (input: string) => {
        const numero = parseInt(input); // Converte para inteiro

        // Verifica se a entrada é válida
        if (isNaN(numero)) {
            console.log("Valor inválido. Por favor, digite um número inteiro.");
            callback(); // Volta para o menu
            return;
        }

        // Verifica se o número é par
        const ePar = numero % 2 === 0;

        if (ePar) {
            console.log("O número informado é par!");
        } else {
            console.log("O número informado é ímpar!");
        }

        // Espera ENTER para voltar ao menu
        rl.question("Aperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
