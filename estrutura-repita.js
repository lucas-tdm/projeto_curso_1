/*

Var
// Seção de Declarações das variáveis 
 sairLoop: caractere
 valor01, valor02: real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

    repita
      escreval("Digite o primeiro valor: ")
      leia(valor01)
      escreval("Digite o segundo valor: ")
      leia(valor02)
      escreval("resultado: ", valor01 + valor02)
      escreval("deseja sair? S/N")
      leia(sairLoop)
    ate sairLoop <> "N"

Fimalgoritmo

*/
function acao(){
    var n1, n2, end
    do{
        n1 = prompt("Digite o primeiro valor: ")
        n2 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "O resultado é: " + (parseInt(n1) + parseInt(n2))
        end = prompt("deseja sair? S/N")
    } while(end == "N")

}

