//Snack 1:
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

// - inserisco una variabile fuori dal for let sum = 0;

// ciclo per 10 volte
    // ? prompt
    //? prendo la parte intera del numero inserto dall'utente
    // ? sommo il numero inserito dall'utente
    //? sum = sum + userNumber
// diciamo all'utente qual'è la somma di tutti i numeri inseriti , in console log

let sum = 0;

for (let index = 0; index < 10; index++) {
    if ( !isNaN (parseInt(prompt("insert a number")))){
    sum += parseInt(prompt("insert a number"));
    }
}