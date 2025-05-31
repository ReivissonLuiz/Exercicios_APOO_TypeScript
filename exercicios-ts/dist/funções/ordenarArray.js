"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenarArray = ordenarArray;
function ordenarArray(rl, menu) {
    const arr = []; // Guarda os números
    console.log("Informe 5 números");
    // Função que pergunta os números, um por um
    function perguntarNumero(i) {
        if (i < 5) {
            rl.question(`Digite o número ${i + 1}: `, (input) => {
                const numero = parseFloat(input);
                if (!isNaN(numero)) { // Valida número
                    arr.push(numero); // Adiciona no array
                    perguntarNumero(i + 1); // Pergunta próximo
                }
                else {
                    console.log("Valor inválido. Digite um número válido.");
                    perguntarNumero(i); // Repete a mesma pergunta
                }
            });
        }
        else {
            // Ordena o array usando método simples (bubble sort)
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
            console.log(arr.join(', ')); // Mostra os números ordenados
            menu(); // Volta ao menu
        }
    }
    perguntarNumero(0);
}
