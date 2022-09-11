/* 
Var
// Seção de Declarações das variáveis 
   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreva("digite um número: ")
     leia(numero)
     fatorial := 1
     
     para contador de 1 ate numero faca
     fatorial := fatorial * contador

     fimpara
     escreva("O fatorial de ", numero, " é: ", fatorial )
Fimalgoritmo
*/


 
var contador

function fatorar() {
   var fatorial = 1
   var n1 = prompt("digite o numero a ser fatorado")
    for (contador = 1; contador <= n1; contador++) {
      fatorial= parseInt(fatorial) * parseInt(contador) 
        
    }
    document.getElementById("paragrafo").innerHTML = fatorial
}
