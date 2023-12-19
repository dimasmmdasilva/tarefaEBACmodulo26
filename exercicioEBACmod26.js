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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Função de saudação
function saudacao(nome) {
    return "Olá " + nome;
}
// Criar interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Função para obter entrada do usuário de forma assíncrona
function obterEntrada(mensagem) {
    return new Promise((resolve) => {
        rl.question(mensagem, (resposta) => {
            resolve(resposta);
        });
    });
}
// Função principal assíncrona
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Solicitar ao usuário o nome
        const nomeUsuario = yield obterEntrada("Digite o seu nome: ");
        // Exibir saudação
        const mensagemSaudacao = saudacao(nomeUsuario);
        console.log(mensagemSaudacao);
        // Solicitar ao usuário o primeiro número
        const inputNumero1 = yield obterEntrada("Digite um número qualquer: ");
        const numero1 = parseFloat(inputNumero1);
        // Solicitar ao usuário o segundo número
        const inputNumero2 = yield obterEntrada("Digite outro número: ");
        const numero2 = parseFloat(inputNumero2);
        // Função de multiplicação
        function multiplicar(x, y) {
            return x * y;
        }
        // Chamar a função de multiplicação
        const resultadoMultiplicacao = multiplicar(numero1, numero2);
        // Exibir resultado da multiplicação
        console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
        // Fechar a interface readline
        rl.close();
    });
}
// Chamar a função principal
main();
