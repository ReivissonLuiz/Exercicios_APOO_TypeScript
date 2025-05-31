"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarSenha = validarSenha;
function validarSenha(rl, callback) {
    rl.question("Digite uma senha: ", (senha) => {
        // Verifica se a senha está correta
        if (verificaSenha(senha)) {
            console.log("Senha válida!");
        }
        else {
            // Se não, mostra os requisitos
            console.log("Senha inválida. Certifique-se de que ela tenha:");
            console.log("- Pelo menos 8 caracteres");
            console.log("- Pelo menos uma letra maiúscula");
            console.log("- Pelo menos uma letra minúscula");
            console.log("- Pelo menos um número");
        }
        // Espera ENTER para voltar ao menu
        rl.question("\nAperte ENTER para voltar ao menu.", () => {
            callback();
        });
    });
}
// Função que verifica os critérios da senha
function verificaSenha(senha) {
    if (senha.length < 8)
        return false;
    const temMaiuscula = /[A-Z]/.test(senha); // Tem letra maiúscula?
    const temMinuscula = /[a-z]/.test(senha); // Tem letra minúscula?
    const temNumero = /[0-9]/.test(senha); // Tem número?
    return temMaiuscula && temMinuscula && temNumero; // Retorna true se todos verdadeiros
}
