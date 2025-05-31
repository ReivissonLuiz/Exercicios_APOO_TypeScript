export function tabuada(rl: any, callback: Function): void {
    // Pergunta o número inteiro
    rl.question("Digite um número inteiro para ver a tabuada: ", (input: string) => {
        const numero = parseInt(input); // Converte para inteiro

        // Verifica se é número válido
        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.");
        } else {
            console.log(`\nTabuada de ${numero}:`);
            // Mostra a tabuada de 1 a 10
            for (let i = 1; i <= 10; i++) {
                console.log(`${numero} x ${i} = ${numero * i}`);
            }
        }

        // Espera ENTER para voltar ao menu
        rl.question("\nAperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
