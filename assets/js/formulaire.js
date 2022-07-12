var validation = document.getElementById("envoyer");

//Nom//
var nom = document.getElementById("nom");
var nom_m = document.getElementById("nommanquant");
var texte_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
 
//Prenom//
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenommanquant");

//Sexe//
var masculin = document.getElementById("masculin");
var feminin = document.getElementById("feminin");
var sexe_m = document.getElementById("sexemanquant");

//Date de naissance//
var naissance = document.getElementById("naissance");
var naissance_m = document.getElementById("naissancemanquant");

//Code postal//
var postal_m = document.getElementById("postalmanquant");
var postal_v = /^[0-9]{5}$/;

//Email//
var email = document.getElementById("email");
var email_m = document.getElementById("emailmanquant");
var email_v = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,252}\.[a-z]{2,4}$/

//Sujet//
var sujet = document.getElementById("sujet");
var sujet_m = document.getElementById("sujetmanquant");

//Votre question//
var question = document.getElementById("question");
var question_m = document.getElementById("questionmanquante");

//Traitement//
var traitement = document.getElementById("traitement");
var traitement_m = document.getElementById("traitementmanquant")

validation.addEventListener("click", function_valid);

function function_valid(e) {
    if (nom.validity.valueMissing) { //Nom//
        e.preventDefault();
        nom_m.textContent = "Nom invalide";
        nom_m.style.color = "red";
    } 
    else if (texte_v.test(nom.value) == false) {
        e.preventDefault();
        nom_m.textContent = "Nom incorrect";
        nom_m.style.color = "orange";
    }
    if (prenom.validity.valueMissing) { //Prenom//
        e.preventDefault();
        prenom_m.textContent = "Prenom invalide";
        prenom_m.style.color = "red";
    }
    else if (texte_v.test(prenom.value) == false) {
        e.preventDefault();
        prenom_m.textContent = "Prenom incorrect";
        prenom_m.style.color = "orange"
    }
    if (masculin.validity.valueMissing || feminin.validity.valueMissing) { //Sexe//
        e.preventDefault();
        sexe_m.textContent = "Veuillez renseigner votre Sexe";
        sexe_m.style.color = "red";
    }
    if (naissance.validity.valueMissing) { //Date de naissance//
        e.preventDefault();
        naissance_m.textContent = "Veuillez entrer votre date de naissance";
        naissance_m.style.color = "red";
    }
    if (postal.validity.valueMissing) { //Code postal//
        e.preventDefault();
        postal_m.textContent = "Code postal invalide";
        postal_m.style.color = "red";
    }
    else if (postal_v.test(postal.value) == false) {
        e.preventDefault();
        postal_m.textContent = "Code postal incorrect";
        postal_m.style.color = "orange";
    }
    if (email.validity.valueMissing) { //Adresse Email//
        e.preventDefault();
        email_m.textContent = "Adresse Email invalide";
        email_m.style.color = "red";
    }
    else if (email_v.test(email.value) == false) {
        e.preventDefault();
        email_m.textContent = "Adresse Email incorrect";
        email_m.style.color = "orange";
    }
    if (sujet.validity.valueMissing) { //Sujet//
        e.preventDefault();
        sujet_m.textContent = "Selectionner un sujet";
        sujet_m.style.color = "red";
    }
    if (question.validity.valueMissing) { //Votre question//
        e.preventDefault();
        question_m.textContent = "Question invalide";
        question_m.style.color = "red";
    } 
    else if (texte_v.test(question.value) == false) {
        e.preventDefault();
        question_m.textContent = "Question incorrect";
        question_m.style.color = "orange";
    }
    if (traitement.validity.valueMissing) { //traitement//
        e.preventDefault();
        traitement_m.textContent = "Veuillez accepter le traitement informatique"
        traitement_m.style.color = "red";
    }
}
 