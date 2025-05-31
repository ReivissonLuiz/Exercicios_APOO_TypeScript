"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somaNumeros = somaNumeros;
function somaNumeros(rl, callback) {
    rl.question("Digite o primeiro número: ", (input1) => {
        const num1 = parseFloat(input1);
        if (isNaN(num1)) {
            console.log("Valor inválido. Digite um número.");
            callback();
            return;
        }
        rl.question("Digite o segundo número: ", (input2) => {
            const num2 = parseFloat(input2);
            if (isNaN(num2)) {
                console.log("Valor inválido. Digite um número.");
                callback();
                return;
            }
            const soma = num1 + num2;
            console.log(`A soma entre ${num1} e ${num2} é: ${soma}`);
            callback(); // Volta para o menu
        });
    });
}
