"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaNotas = mediaNotas;
function mediaNotas(rl, menu) {
    rl.question("Digite a primeira nota: ", (input1) => {
        const nota1 = parseFloat(input1);
        if (isNaN(nota1)) {
            console.log("Valor inválido. Digite um número.");
            menu();
            return;
        }
        rl.question("Digite a segunda nota: ", (input2) => {
            const nota2 = parseFloat(input2);
            if (isNaN(nota2)) {
                console.log("Valor inválido. Digite um número.");
                menu();
                return;
            }
            rl.question("Digite a terceira nota: ", (input3) => {
                const nota3 = parseFloat(input3);
                if (isNaN(nota3)) {
                    console.log("Valor inválido. Digite um número.");
                    menu();
                    return;
                }
                const media = (nota1 + nota2 + nota3) / 3;
                console.log(`A média é: ${media.toFixed(2)}`);
                menu();
            });
        });
    });
}
