/*
Var
// Seção de Declarações das variáveis 
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("digite seu nome")
   leia(nome)
   escreval("digite seu número")
   leia(numero)

   escreval(nome, " : ", numero)
Fimalgoritmo
*/
var nome, numero;

nome = prompt("escreva seu nome")
numero = prompt("escreva seu numero")

document.getElementById("paragrafo").innerText = nome + ": " + numero