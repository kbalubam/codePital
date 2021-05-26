import {Lieu, Patients, Doctor, Diagnostique, Traitement} from "./classes.js";
 
// Definition des lieux

let salle_attente = new Lieu("salle d'attente", []);

let pharmacie = new Lieu("pharmacie", []);

let cimetière = new Lieu("cimetière", []);

// Definition des patients 

let marcus = new Patients ("Marcus", "mal indenté", 100, [], "malade");

let optimus = new Patients ("Optimus", "unsave", 200, [], "malade");

let sangoku = new Patients ("Sangoku", "404", 80, [], "malade");

let darthVader = new Patients ("DarthVader", "azmatique", 110, [], "malade");

let semicolon = new Patients ("Semicolon", "syntaxError", 60, [], "malade");

// Definition du doceur 

let Debugger = new Doctor ("Debugger", 0, ["chat"]);

// Definition diagnostique 

let mal_indenté = new Diagnostique("mal indenté", "ctrl+maj+f");

let unsave = new Diagnostique("unsave", "saveOnFocusChange");

let not_found = new Diagnostique("404", "CheckLinkRelation");

let azmatique = new Diagnostique("azmatique", "Ventoline");

let SyntaxError = new Diagnostique("syntaxError", "f12+doc");

// Definition des traitements 

let ctrl = new Traitement("ctrl+maj+f", 60);

let save = new Traitement("saveOnFocusChange", 100);

let check = new Traitement ("checkLinkRelation", 35);

let ventoline = new Traitement ("ventoline", 40);

let f12doc = new Traitement ("f12+doc", 20);
