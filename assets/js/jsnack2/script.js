
/* **JSnack 2**
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

//prompt inserisci numero

var numero = parseInt(prompt("Inserisci un numero"));

if (numero%2 == 0){
  console.log(numero);
}
else{
  console.log(numero + 1);
}
