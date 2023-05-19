//Snack 3:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.




// creo un array vuoto
// creo un ciclo for che iteri per 6 volte
// chiedo all'utente di inserire un numero 
// se è dispari lo inserisco nell'arrey
// altrimenti non faccio nulla


// uscito dal ciclo stampo l'array in console






const array = [];

const number = 6;





for( let i = 0; i < 6; i++ ){

    const userNumber = parseInt(prompt("insert your number"));

    if ( !isNaN(userNumber) && userNumber % 2 === 1){
        array.push(userNumber);
    }
}

console.log(array);





