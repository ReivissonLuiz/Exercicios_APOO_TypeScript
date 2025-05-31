import * as readline from 'readline';

export function numerosPares(rl: readline.Interface, menu: () => void): void {
    console.log("Números pares de 0 a 20:");
    const pares: number[] = [];

    // Loop de 0 a 20 para pegar só os pares
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) { // Verifica se é par
            pares.push(i);  // Adiciona no array
        }
    }

    // Mostra os números pares separados por vírgula
    console.log(pares.join(", "));
    
    // Espera ENTER para voltar ao menu
    rl.question("Aperte ENTER para voltar ao menu.", () => {
        menu();
    });
}
