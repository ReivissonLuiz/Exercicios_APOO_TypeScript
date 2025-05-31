"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jogoAdivinhar = jogoAdivinhar;
function jogoAdivinhar(rl, callback) {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatório
    let tentativas = 0; // Contador de tentativas
    console.log("Tente adivinhar o número que estou pensando (entre 1 e 100).");
    function perguntar() {
        rl.question("Digite seu palpite: ", (input) => {
            const tentativa = parseInt(input);
            tentativas++;
            // Valida se é número
            if (isNaN(tentativa)) {
                console.log("Por favor, digite um número válido.");
                tentativas--; // Não conta essa tentativa
                perguntar(); // Pergunta de novo
                return;
            }
            // Dá dica para o usuário
            if (tentativa < numeroSecreto) {
                console.log("Mais alto!");
                perguntar();
            }
            else if (tentativa > numeroSecreto) {
                console.log("Mais baixo!");
                perguntar();
            }
            else {
                // Acertou o número
                console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
                rl.question("\nAperte ENTER para voltar ao menu.", () => {
                    callback();
                });
            }
        });
    }
    perguntar();
}
