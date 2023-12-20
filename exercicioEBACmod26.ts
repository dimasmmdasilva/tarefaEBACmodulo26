import * as readline from 'readline';
const saudacao = (nome: string) => `Olá ${nome}`;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const obterEntrada = (mensagem: string): Promise<string> => new Promise(resolve => rl.question(mensagem, resolve));
const main = async () => {
const nomeUsuario = await obterEntrada("Digite o seu nome: ");
console.log(saudacao(nomeUsuario));
const numero1 = parseFloat(await obterEntrada("Digite um número qualquer: "));
const numero2 = parseFloat(await obterEntrada("Digite outro número: "));
const multiplicar = (x: number, y: number) => x * y;
const resultadoMultiplicacao = multiplicar(numero1, numero2);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
rl.close();};
main();