import * as readline from 'readline';

export function somaNumeros(rl: readline.Interface, callback: () => void): void {
    // Pergunta o primeiro número
    rl.question("Digite o primeiro número: ", (input1: string) => {
        const num1 = parseFloat(input1); // Converte para número decimal

        // Verifica se o número é válido
        if (isNaN(num1)) {
            console.log("Valor inválido. Digite um número.");
            callback(); // Volta para o menu
            return;
        }

        // Pergunta o segundo número
        rl.question("Digite o segundo número: ", (input2: string) => {
            const num2 = parseFloat(input2); // Converte para número decimal

            // Verifica se o número é válido
            if (isNaN(num2)) {
                console.log("Valor inválido. Digite um número.");
                callback(); // Volta para o menu
                return;
            }

            const soma: number = num1 + num2; // Calcula soma
            console.log(`A soma entre ${num1} e ${num2} é: ${soma}`); // Mostra resultado

            // Espera ENTER para voltar ao menu
            rl.question("Aperte ENTER para voltar ao menu.", () => {
                callback();
            });
        });
    });
}
