/*

Var
// Seção de Declarações das variáveis 
      nome: caractere
      idade, limite, contador: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

         escreva("Digite a quantidade de vezes que será verificado a idade: ")
         leia(limite)
         contador := 0
         enquanto contador < limite faca
                  escreva("digite o nome da pessoa")
                  leia(nome)
                  escreva("digite a idade de ", nome, ": ")
                  leia(idade)
                  se idade > 18 entao
                  escreval(nome, " é maior de idade.")
                  senao
                  escreval(nome, "é menor de idade.")

                  fimse
                  contador := contador + 1
                  fimenquanto


*/


function verificar() {
    var nome, idade, limite, contador
    limite = prompt("digite o limite de verificações")
   contador = 0 
   while(contador < limite){
    nome = prompt("digite o nome")
    idade = prompt("digite a idade")
    if (idade < 18)
        document.getElementById("paragrafo").innerText= nome + " é menor de idade"
         else
         document.getElementById("paragrafo").innerText= nome + " é maior de idade"
         contador++
    }
    
   }


