"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contadorDeVogais = contadorDeVogais;
function contadorDeVogais(rl, callback) {
    // Pede ao usuário para digitar uma frase
    rl.question("Digite uma frase: ", (frase) => {
        // Procura todas as vogais na frase (maiúsculas e minúsculas)
        const vogais = frase.match(/[aeiouáéíóúâêîôûãõàèìòù]/gi);
        // Conta quantas vogais foram encontradas
        const total = vogais ? vogais.length : 0;
        // Mostra o total de vogais
        console.log(`Número de vogais: ${total}`);
        // Espera ENTER para voltar ao menu
        rl.question("Aperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
