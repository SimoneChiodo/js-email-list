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
            emailList.innerHTML += `
            <li> ${data.response} </li>`;
        });
};

// Funzione che aggiunge le email alla lista
function addRandomEmailToList(cycles) {
    for (let i = 0; i < cycles; i++) generateEmail();
}

// Dichiarazione variabili
const emailList = document.getElementById("email-list");
const resetEmailButton = document.getElementById("reset-email");
let emailsNumber = 10;

//Chiamo la funzione per aggiungere N email
addRandomEmailToList(emailsNumber);
