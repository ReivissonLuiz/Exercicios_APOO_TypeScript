"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaNotas = mediaNotas;
function mediaNotas(rl, menu) {
    // Pergunta a primeira nota
    rl.question("Digite a primeira nota: ", (input1) => {
        const nota1 = parseFloat(input1); // Converte para número
        // Verifica se é um número válido
        if (isNaN(nota1)) {
            console.log("Valor inválido. Digite um número.");
            menu(); // Volta para o menu se inválido
            return;
        }
        // Pergunta a segunda nota
        rl.question("Digite a segunda nota: ", (input2) => {
            const nota2 = parseFloat(input2);
            if (isNaN(nota2)) {
                console.log("Valor inválido. Digite um número.");
                menu();
                return;
            }
            // Pergunta a terceira nota
            rl.question("Digite a terceira nota: ", (input3) => {
                const nota3 = parseFloat(input3);
                if (isNaN(nota3)) {
                    console.log("Valor inválido. Digite um número.");
                    menu();
                    return;
                }
                // Calcula a média das 3 notas
                const media = (nota1 + nota2 + nota3) / 3;
                // Mostra a média com 2 casas decimais
                console.log(`A média é: ${media.toFixed(2)}`);
                // Espera ENTER para voltar ao menu
                rl.question("Aperte ENTER para voltar ao menu.", () => {
                    menu();
                });
            });
        });
    });
}
