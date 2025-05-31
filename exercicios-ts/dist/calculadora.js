"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = calculadora;
function calculadora(rl, menu) {
    console.log("\nEscolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    rl.question("Digite o número da operação: ", (escolhaStr) => {
        const escolha = parseInt(escolhaStr);
        if (![1, 2, 3, 4].includes(escolha)) {
            console.log("Opção inválida.");
            return menu();
        }
        rl.question("Digite o primeiro número: ", (num1Str) => {
            const num1 = parseFloat(num1Str);
            if (isNaN(num1)) {
                console.log("Valor inválido.");
                return menu();
            }
            rl.question("Digite o segundo número: ", (num2Str) => {
                const num2 = parseFloat(num2Str);
                if (isNaN(num2)) {
                    console.log("Valor inválido.");
                    return menu();
                }
                let resultado;
                switch (escolha) {
                    case 1:
                        resultado = num1 + num2;
                        console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                        break;
                    case 2:
                        resultado = num1 - num2;
                        console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                        break;
                    case 3:
                        resultado = num1 * num2;
                        console.log(`Resultado: ${num1} x ${num2} = ${resultado}`);
                        break;
                    case 4:
                        if (num2 !== 0) {
                            resultado = num1 / num2;
                            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                        }
                        else {
                            console.log("Erro: divisão por zero.");
                        }
                        break;
                }
                menu();
            });
        });
    });
}
