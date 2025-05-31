"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numerosPares = numerosPares;
function numerosPares(rl, menu) {
    console.log("Números pares de 0 a 20:");
    const pares = [];
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    console.log(pares.join(", "));
    menu();
}
