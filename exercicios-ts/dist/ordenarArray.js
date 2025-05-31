"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenarArray = ordenarArray;
function ordenarArray(rl, menu) {
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
                    perguntarNumero(i); // repete a pergunta
                }
            });
        }
        else {
            // Ordenação com algoritmo de troca (bubble sort)
            let aux;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] < arr[j]) {
                        aux = arr[i];
                        arr[i] = arr[j];
                        arr[j] = aux;
                    }
                }
            }
            console.log("Array ordenado:");
            console.log(arr.join(', '));
            menu(); // volta ao menu
        }
    }
    perguntarNumero(0); // inicia as perguntas
}
