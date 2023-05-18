//Snack 3:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

let array = [];

const number = 6;

let userNumber = prompt("insert you number");



for( let i = 0; i < userNumber; i++ ){

    if (userNumber % 2 == 1){
        array.push(userNumber);
    }
}

console.log(array);