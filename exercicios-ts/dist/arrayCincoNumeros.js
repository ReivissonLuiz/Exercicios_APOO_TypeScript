"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayCincoNumeros = arrayCincoNumeros;
function arrayCincoNumeros(rl, menu) {
    const numeros = [];
    let contador = 0;
    function perguntar() {
        if (contador < 5) {
            rl.question(`Digite o número ${contador + 1} que deseja armazenar: `, (resposta) => {
                const numero = parseInt(resposta);
                if (isNaN(numero)) {
                    console.log("Por favor, digite um número válido.");
                    perguntar();
                }
                else {
                    numeros.push(numero);
                    contador++;
                    perguntar();
                }
            });
        }
        else {
            console.log("Números armazenados:", numeros.join(", "));
            menu();
        }
    }
    perguntar();
}
