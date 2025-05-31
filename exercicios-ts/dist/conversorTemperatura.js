"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversorTemperatura = conversorTemperatura;
function conversorTemperatura(rl, menu) {
    rl.question("Digite a temperatura em Celsius: ", (input) => {
        const celsius = parseFloat(input);
        if (isNaN(celsius)) {
            console.log("Valor inválido. Digite um número.");
            menu();
            return;
        }
        const fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
        console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
        menu();
    });
}
