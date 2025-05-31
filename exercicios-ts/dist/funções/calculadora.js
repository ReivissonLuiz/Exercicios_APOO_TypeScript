"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = calculadora;
// Função da calculadora
function calculadora(rl, menu) {
    // Mostra as opções de operação
    console.log("\nEscolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    // Pergunta qual operação o usuário quer
    rl.question("Digite o número da operação: ", (escolhaStr) => {
        const escolha = parseInt(escolhaStr); // Converte pra número
        // Se a opção for inválida, volta pro menu
        if (![1, 2, 3, 4].includes(escolha)) {
            console.log("Opção inválida.");
            return menu();
        }
        // Pergunta o primeiro número
        rl.question("Digite o primeiro número: ", (num1Str) => {
            const num1 = parseFloat(num1Str); // Converte pra número
            // Se for inválido, volta pro menu
            if (isNaN(num1)) {
                console.log("Valor inválido.");
                return menu();
            }
            // Pergunta o segundo número
            rl.question("Digite o segundo número: ", (num2Str) => {
                const num2 = parseFloat(num2Str); // Converte pra número
                // Se for inválido, volta pro menu
                if (isNaN(num2)) {
                    console.log("Valor inválido.");
                    return menu();
                }
                let resultado;
                // Verifica qual operação foi escolhida
                switch (escolha) {
                    case 1:
                        resultado = num1 + num2; // Soma
                        console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                        break;
                    case 2:
                        resultado = num1 - num2; // Subtração
                        console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                        break;
                    case 3:
                        resultado = num1 * num2; // Multiplicação
                        console.log(`Resultado: ${num1} x ${num2} = ${resultado}`);
                        break;
                    case 4:
                        if (num2 !== 0) {
                            resultado = num1 / num2; // Divisão
                            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                        }
                        else {
                            console.log("Erro: divisão por zero."); // Erro de divisão por zero
                        }
                        break;
                }
                // Espera ENTER pra voltar pro menu
                rl.question("Aperte ENTER para voltar ao menu.", () => {
                    menu();
                });
            });
        });
    });
}
