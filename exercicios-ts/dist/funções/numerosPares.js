"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numerosPares = numerosPares;
function numerosPares(rl, menu) {
    console.log("Números pares de 0 a 20:");
    const pares = [];
    // Loop de 0 a 20 para pegar só os pares
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) { // Verifica se é par
            pares.push(i); // Adiciona no array
        }
    }
    // Mostra os números pares separados por vírgula
    console.log(pares.join(", "));
    // Espera ENTER para voltar ao menu
    rl.question("Aperte ENTER para voltar ao menu.", () => {
        menu();
    });
}
