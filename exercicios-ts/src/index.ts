    import * as readline from 'readline';
    import { somaNumeros } from './funções/somaNumeros.js';
    import { parOuImpar } from './funções/parOuImpar.js';
    import { mediaNotas } from './funções/mediaNotas.js';
    import { conversorTemperatura } from './funções/conversorTemperatura.js';
    import { numerosPares } from './funções/numerosPares.js'
    import { arrayCincoNumeros } from './funções/arrayCincoNumeros.js';
    import { encontrarMaiorNumArray } from './funções/encontrandoMaiorNumArray.js';
    import { contadorDeVogais } from './funções/contadorDeVogais.js';
    import { calculadora } from './funções/calculadora.js';
    import { ordenarArray } from './funções/ordenarArray.js';
    import { executarClassePessoa } from './funções/Pessoa.js';
    import { executarClasseAluno } from './funções/aluno.js';
    import { executarClasseCarro } from './funções/carro.js';
    import { tabuada } from './funções/tabuada.js';
    import { calculadoraIMC } from './funções/calculadoraIMC.js';
    import { validarSenha } from './funções/validarSenha.js';
    import { jogoAdivinhar } from './funções/jogoAdivinhar.js';
    import { contadorDePalavras } from './funções/contadorDePalavras.js';


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function pausarMenu(){
        console.log("\n"+"=".repeat(50));
        rl.question("Pressione ENTER para voltar ao menu...", () =>{
            console.clear();
            menu();
        })
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

        rl.question("Sua escolha: ", (opcao: string) => {
            switch(opcao) {
                case "1":
                    somaNumeros(rl, menu);
                    break;
                case "2":
                    parOuImpar(rl, menu);
                    break;
                case "3":
                    mediaNotas(rl, menu);
                    break;
                case "4":
                    conversorTemperatura(rl, menu);
                    break;
                case "5":
                    numerosPares(rl, menu);
                    break;
                case "6":
                    arrayCincoNumeros(rl, menu);
                    break;
                case "7":
                    encontrarMaiorNumArray(rl, menu);
                    break;
                case "8":
                    contadorDeVogais(rl, menu);
                    break;
                case "9":
                    calculadora(rl, menu);
                    break;
                case "10":
                    ordenarArray(rl, menu);
                    break;
                case "11":
                    executarClassePessoa(rl, menu);
                    break;
                case "12":
                    executarClasseAluno(rl, menu);
                    break;
                case "13":
                    executarClasseCarro(rl, menu);
                    break;
                case "14":
                    tabuada(rl, menu);
                      break;
                case "15":
                    calculadoraIMC(rl, menu);
                    break;
                case "16":
                    validarSenha(rl, menu);
                    break;
                case "17":
                    jogoAdivinhar(rl, menu);
                    break;
                case "18":
                    contadorDePalavras(rl, menu);
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