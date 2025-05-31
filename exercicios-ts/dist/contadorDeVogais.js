"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contadorDeVogais = contadorDeVogais;
function contadorDeVogais(rl, callback) {
    rl.question("Digite uma frase: ", (frase) => {
        const vogais = frase.match(/[aeiouáéíóúâêîôûãõàèìòù]/gi);
        const total = vogais ? vogais.length : 0;
        console.log(`Número de vogais: ${total}`);
        callback();
    });
}
