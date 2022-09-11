// comando em portugol para transcrever para JS:
/* 
escreval ("digite o nome do aluno")
         leia (nome)
   escreval ("digite a nota 1 do aluno")
         leia (nota01)
         escreval ("digite a nota 2 do aluno")
         leia (nota02)
         media := (nota01 + nota02) / 2

         se media >= 60     entao
         escreval ("Aprovado! Sua nota foi:", media)
         senao
         escreval ("Reprovado. Sua nota foi:", media)
         fimse
         escreval ("nota para passar: 6")
         */

         var nome, nota01, nota02, media;
         nome = prompt("Digite seu nome");
         nota01 = prompt("Digite a sua primeira nota");
         nota02 = prompt("Digite sua segunda nota")
         media = ( parseInt (nota01) + parseInt (nota02)) / 2;
         
         if (media >= 60)
            alert("Voce passou de ano, sua media foi: " + media)
        else 
            alert ("Voce reprovou, sua media foi: " + media)