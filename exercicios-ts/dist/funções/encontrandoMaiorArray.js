"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encontraMaiorNumArray = encontraMaiorNumArray;
function encontraMaiorNumArray(rl, menu) {
    const arr = [];
    console.log("Informe 5 números");
    function perguntarNumero(i) {
        if (i < 5) {
            rl.question(`Digite o número ${i + 1}: `, (input) => {
                const numero = parseFloat(input);
                if (!isNaN(numero)) {
                    arr.push(numero);
                    perguntarNumero(i + 1);
                }
                else {
                    console.log("Valor inválido. Digite um número válido.");
                    perguntarNumero(i);
                }
            });
        }
        else {
            let maior = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < maior) {
                    maior = arr[i];
                }
            }
            menu();
        }
    }
}
