export function contadorDePalavras(rl: any, callback: Function): void {
    
    // Pergunta uma frase para o usuário
    rl.question("Digite uma frase: ", (frase: string) => {
        const trimmed = frase.trim(); // Remove espaços do começo e do fim

        // Se a frase estiver vazia, conta 0. Senão, conta as palavras
        const quantidadePalavras = trimmed === "" ? 0 : trimmed.split(/\s+/).length;

        // Mostra o total de palavras
        console.log(`A frase contém ${quantidadePalavras} palavra(s).`);

        // Espera ENTER para voltar ao menu
        rl.question("\nAperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
