import * as readline from 'readline';

// Função que guarda 5 números digitados pelo usuário
export function arrayCincoNumeros(rl: readline.Interface, menu: () => void): void {
    const numeros: number[] = []; // Lista onde os números vão ser guardados
    let contador = 0; // Conta quantos números já foram digitados

    // Função que faz as perguntas
    function perguntar(): void {
        // Se ainda não digitou 5 números
        if (contador < 5) {
            rl.question(`Digite o número ${contador + 1} que deseja armazenar: `, (resposta: string) => {
                const numero = parseInt(resposta); // Transforma a resposta em número

                // Se não for número, avisa e pergunta de novo
                if (isNaN(numero)) {
                    console.log("Por favor, digite um número válido.");
                    perguntar();
                } else {
                    numeros.push(numero); // Adiciona o número na lista
                    contador++; // Aumenta o contador
                    perguntar(); // Pergunta o próximo número
                }
            });
        } else {
            // Quando terminar, mostra os números digitados
            console.log("Números armazenados:", numeros.join(", "));
            // Espera o usuário apertar ENTER pra voltar pro menu
            rl.question("Aperte ENTER para voltar ao menu.", () => {
                menu();
            });
        }
    }

    perguntar();
}
