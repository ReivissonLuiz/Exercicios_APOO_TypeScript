import * as readline from 'readline';

export function encontrarMaiorNumArray(rl: readline.Interface, menu: () => void): void {
  console.log("\n=== ENCONTRAR MAIOR NÚMERO NO ARRAY ===");
  
  const numeros: number[] = [];
  let contador = 0;

  const perguntarNumero = () => {
    rl.question(`Digite o ${contador + 1}º número: `, (input) => {
      const numero = parseFloat(input); // Converte para número
      
      // Valida se é um número válido
      if (isNaN(numero)) {
        console.log('Por favor, digite um número válido!');
        perguntarNumero(); // Pergunta de novo se inválido
        return;
      }

      numeros.push(numero); // Adiciona ao array
      contador++;

      // Se não chegou a 5, pergunta outro número
      if (contador < 5) {
        perguntarNumero();
      } else {
        // Quando já tem 5 números, procura o maior
        let maiorNumero = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
          if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
          }
        }
        
        // Mostra o resultado
        console.log('\n--- Resultado ---');
        console.log(`Array de números: [${numeros.join(', ')}]`);
        console.log(`Maior número: ${maiorNumero}`);
        
        console.log("\n" + "=".repeat(50));
        
        // Espera ENTER para voltar ao menu
        rl.question("Pressione ENTER para voltar ao menu...", () => {
          console.clear();
          menu();
        });
      }
    });
  };

  perguntarNumero();
}
