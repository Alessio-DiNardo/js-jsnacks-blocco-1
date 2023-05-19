//Snack 4:
//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
let userNumber = (prompt(" Insert a number a four digits number"));

if ( !(userNumber > 999 && userNumber < 9999) ){
        userNumber = prompt("Insert a number a four digits number");
}
for (let index = 0; index < userNumber.length; index++) {
    sum += parseInt(userNumber.charAT(index));
}




console.log(sum);
