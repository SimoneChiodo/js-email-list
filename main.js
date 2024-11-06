// TESTO:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// API per generare email
const generateEmail = () => {
    fetch("https:flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            addRandomEmailToList(data.response);
        });
};

// Dichiarazione variabili
const emailList = document.getElementById("email-list");
let emailsNumber = 10;

//Chiamo la funzione per aggiungere 1 email
for (let i = 0; i < emailsNumber; i++) generateEmail();

// Funzione che aggiunge le email alla lista
function addRandomEmailToList(mail) {
    emailList.innerHTML += `
    <li> ${mail} </li>`;
}
