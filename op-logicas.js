var nome, nota01, nota02, media, passou;

passou = false;

nome = prompt("Digite seu nome");
nota01 = prompt("Digite a sua primeira nota");
nota02 = prompt("Digite sua segunda nota")
media = ( parseInt (nota01) + parseInt (nota02)) / 2;

if (media >=60)
    passou = true;

if (passou)
   alert("Voce passou de ano, sua media foi: " + media)
else 
   alert ("Voce reprovou, sua media foi: " + media)
    