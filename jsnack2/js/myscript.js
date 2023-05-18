//Snack 2:
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const partyList = [ "Asuna", "Doraimon", "Mara Maionchi", "Fedez", "Ash", "Pika",];

const userList = prompt("inserisci il tuo nome");

let isNameFound = false;

for( let i = 0; i < partyList.length - 1; i++){
    console.log(i, partyList[i]);
if (userList === partyList){
    isNameFound = true;
    }
}


if ( isNameFound ) {
    console.log("Enter valid");
} else {
    console.log("Enter notvalid");
}
