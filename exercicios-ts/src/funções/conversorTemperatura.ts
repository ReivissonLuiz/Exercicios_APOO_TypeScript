import * as readline from 'readline';

export function conversorTemperatura(rl: readline.Interface, menu: () => void): void {
    // Pergunta a temperatura em Celsius
    rl.question("Digite a temperatura em Celsius: ", (input: string) => {
        const celsius = parseFloat(input); // Converte para número

        // Verifica se é um número válido
        if (isNaN(celsius)) {
            console.log("Valor inválido. Digite um número.");
            menu(); // Volta para o menu se inválido
            return;
        }

        // Faz a conversão para Fahrenheit
        const fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
        // Mostra o resultado com 2 casas decimais
        console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);

        // Espera ENTER para voltar ao menu
        rl.question("Aperte ENTER para voltar ao menu.", () => {
            menu();
        });
    });
}
