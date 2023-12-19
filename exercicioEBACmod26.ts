import * as readline from 'readline';

// Função de saudação
function saudacao(nome: string): string 
{
return "Olá " + nome;
}

// Criar interface readline
const rl = readline.createInterface
({
input: process.stdin,
output: process.stdout,
});

// Função para obter entrada do usuário de forma assíncrona
function obterEntrada(mensagem: string): Promise<string> 
{
return new Promise((resolve) => 
    {
    rl.question(mensagem, (resposta) => 
        {
            resolve(resposta);
        });
    });
}

// Função principal assíncrona
async function main() 
{
// Solicitar ao usuário o nome
const nomeUsuario = await obterEntrada("Digite o seu nome: ");

// Exibir saudação
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao);

// Solicitar ao usuário o primeiro número
const inputNumero1 = await obterEntrada("Digite um número qualquer: ");
const numero1 = parseFloat(inputNumero1);

// Solicitar ao usuário o segundo número
const inputNumero2 = await obterEntrada("Digite outro número: ");
const numero2 = parseFloat(inputNumero2);

// Função de multiplicação
function multiplicar(x: number, y: number): number {
return x * y;
}

// Chamar a função de multiplicação
const resultadoMultiplicacao = multiplicar(numero1, numero2);

// Exibir resultado da multiplicação
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

// Fechar a interface readline
rl.close();
}

// Chamar a função principal
main();
