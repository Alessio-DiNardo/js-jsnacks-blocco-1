//Snack 3:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

let array = [];

const userNumber = 6;


for( let i = 0; i < userNumber; i++ ){
    array.push(prompt("insert one number"))
}
console.log(array);