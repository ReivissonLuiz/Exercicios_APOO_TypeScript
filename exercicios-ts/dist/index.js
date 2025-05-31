"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const somaNumeros_js_1 = require("./fun\u00E7\u00F5es/somaNumeros.js");
const parOuImpar_js_1 = require("./fun\u00E7\u00F5es/parOuImpar.js");
const mediaNotas_js_1 = require("./fun\u00E7\u00F5es/mediaNotas.js");
const conversorTemperatura_js_1 = require("./fun\u00E7\u00F5es/conversorTemperatura.js");
const numerosPares_js_1 = require("./fun\u00E7\u00F5es/numerosPares.js");
const arrayCincoNumeros_js_1 = require("./fun\u00E7\u00F5es/arrayCincoNumeros.js");
const encontrandoMaiorNumArray_js_1 = require("./fun\u00E7\u00F5es/encontrandoMaiorNumArray.js");
const contadorDeVogais_js_1 = require("./fun\u00E7\u00F5es/contadorDeVogais.js");
const calculadora_js_1 = require("./fun\u00E7\u00F5es/calculadora.js");
const ordenarArray_js_1 = require("./fun\u00E7\u00F5es/ordenarArray.js");
const Pessoa_js_1 = require("./fun\u00E7\u00F5es/Pessoa.js");
const aluno_js_1 = require("./fun\u00E7\u00F5es/aluno.js");
const carro_js_1 = require("./fun\u00E7\u00F5es/carro.js");
const tabuada_js_1 = require("./fun\u00E7\u00F5es/tabuada.js");
const calculadoraIMC_js_1 = require("./fun\u00E7\u00F5es/calculadoraIMC.js");
const validarSenha_js_1 = require("./fun\u00E7\u00F5es/validarSenha.js");
const jogoAdivinhar_js_1 = require("./fun\u00E7\u00F5es/jogoAdivinhar.js");
const contadorDePalavras_js_1 = require("./fun\u00E7\u00F5es/contadorDePalavras.js");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pausarMenu() {
    console.log("\n" + "=".repeat(50));
    rl.question("Pressione ENTER para voltar ao menu...", () => {
        console.clear();
        menu();
    });
}
function voltarAoMenu() {
    pausarMenu();
}
function menu() {
    console.log("\nEscolha uma opção: ");
    console.log("1. Soma de Numeros     | 2. Par ou Impar");
    console.log("3. Media Notas         | 4. Conversor de Temperatura");
    console.log("5. Numeros Pares       | 6. Array com 5 Numeros");
    console.log("7. Maior Numero Array  | 8. Numero de Vogais");
    console.log("9. Calculadora         | 10. Ordenar Array ");
    console.log("11. Classe Pessoa      | 12. Classe Aluno com Herança");
    console.log("13. Classe Carro       | 14. Tabuada");
    console.log("15. Calculadora IMC    | 16. Validar Senha");
    console.log("17. Jogo de Addivinhar | 18. Contador de Palavras");
    console.log("0 - Sair");
    rl.question("Sua escolha: ", (opcao) => {
        switch (opcao) {
            case "1":
                (0, somaNumeros_js_1.somaNumeros)(rl, menu);
                break;
            case "2":
                (0, parOuImpar_js_1.parOuImpar)(rl, menu);
                break;
            case "3":
                (0, mediaNotas_js_1.mediaNotas)(rl, menu);
                break;
            case "4":
                (0, conversorTemperatura_js_1.conversorTemperatura)(rl, menu);
                break;
            case "5":
                (0, numerosPares_js_1.numerosPares)(rl, menu);
                break;
            case "6":
                (0, arrayCincoNumeros_js_1.arrayCincoNumeros)(rl, menu);
                break;
            case "7":
                (0, encontrandoMaiorNumArray_js_1.encontrarMaiorNumArray)(rl, menu);
                break;
            case "8":
                (0, contadorDeVogais_js_1.contadorDeVogais)(rl, menu);
                break;
            case "9":
                (0, calculadora_js_1.calculadora)(rl, menu);
                break;
            case "10":
                (0, ordenarArray_js_1.ordenarArray)(rl, menu);
                break;
            case "11":
                (0, Pessoa_js_1.executarClassePessoa)(rl, menu);
                break;
            case "12":
                (0, aluno_js_1.executarClasseAluno)(rl, menu);
                break;
            case "13":
                (0, carro_js_1.executarClasseCarro)(rl, menu);
                break;
            case "14":
                (0, tabuada_js_1.tabuada)(rl, menu);
                break;
            case "15":
                (0, calculadoraIMC_js_1.calculadoraIMC)(rl, menu);
                break;
            case "16":
                (0, validarSenha_js_1.validarSenha)(rl, menu);
                break;
            case "17":
                (0, jogoAdivinhar_js_1.jogoAdivinhar)(rl, menu);
                break;
            case "18":
                (0, contadorDePalavras_js_1.contadorDePalavras)(rl, menu);
                break;
            case "0":
                console.log("Encerrando o programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida, tente novamente.");
                menu();
                break;
        }
    });
}
menu();
