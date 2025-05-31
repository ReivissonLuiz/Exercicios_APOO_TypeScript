"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadoraIMC = calculadoraIMC;
function calculadoraIMC(rl, callback) {
    // Pergunta o peso
    rl.question("Digite seu peso (em kg): ", (pesoInput) => {
        const peso = parseFloat(pesoInput); // Converte pra número
        // Pergunta a altura
        rl.question("Digite sua altura (em metros): ", (alturaInput) => {
            const altura = parseFloat(alturaInput); // Converte pra número
            // Verifica se os valores são válidos
            if (isNaN(peso) || isNaN(altura) || altura <= 0) {
                console.log("Entrada inválida. Certifique-se de digitar números válidos.");
            }
            else {
                // Faz o cálculo do IMC
                const imc = peso / (altura * altura);
                // Mostra o resultado do IMC
                console.log(`\nSeu IMC é: ${imc.toFixed(1)}`);
                // Mostra a classificação de acordo com o valor
                process.stdout.write("Classificação: ");
                if (imc < 18.5) {
                    console.log("Abaixo do peso");
                }
                else if (imc < 24.9) {
                    console.log("Peso normal");
                }
                else if (imc < 29.9) {
                    console.log("Sobrepeso");
                }
                else if (imc < 34.9) {
                    console.log("Obesidade grau I");
                }
                else if (imc < 39.9) {
                    console.log("Obesidade grau II");
                }
                else {
                    console.log("Obesidade grau III (mórbida)");
                }
            }
            // Espera ENTER pra voltar pro menu
            rl.question("\nAperte ENTER para voltar ao menu.", () => {
                callback();
            });
        });
    });
}
