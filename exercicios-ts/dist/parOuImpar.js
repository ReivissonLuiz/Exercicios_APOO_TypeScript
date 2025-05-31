"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parOuImpar = parOuImpar;
function parOuImpar(rl, callback) {
    rl.question("Digite um número inteiro: ", (input) => {
        const numero = parseInt(input);
        if (isNaN(numero)) {
            console.log("Valor inválido. Por favor, digite um número inteiro.");
            callback();
            return;
        }
        const ePar = numero % 2 === 0;
        if (ePar) {
            console.log("O número informado é par!");
        }
        else {
            console.log("O número informado é ímpar!");
        }
        callback(); // Volta ao menu principal
    });
}
