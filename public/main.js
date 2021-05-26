import {Lieu, Patient, Doctor, Diagnostique, Traitement} from "./classes.js";
import{cris} from "./function.js";
 

// Definition des patients 

let marcus = new Patient ("Marcus", "mal indenté", 100, [], "malade");

let optimus = new Patient ("Optimus", "unsave", 200, [], "malade");

let sangoku = new Patient ("Sangoku", "404", 80, [], "malade");

let darthVader = new Patient ("DarthVader", "azmatique", 110, [], "malade");

let semicolon = new Patient ("Semicolon", "syntaxError", 60, [], "malade");

// Definition des lieux

let salle_attente = new Lieu("salle d'attente", [marcus.nom,optimus.nom,sangoku.nom,darthVader.nom,semicolon.nom]);
let listePatient=[marcus,optimus,sangoku,darthVader,semicolon];


let pharmacie = new Lieu("pharmacie", []);

let cimetière = new Lieu("cimetière", []);



// Definition du doceur 

let Debugger = new Doctor ("Debugger", 0, ["chat"]);

// Definition diagnostique 

let mal_indenté = new Diagnostique("mal indenté", "ctrl+maj+f");

let unsave = new Diagnostique("unsave", "saveOnFocusChange");

let not_found = new Diagnostique("404", "CheckLinkRelation");

let azmatique = new Diagnostique("azmatique", "Ventoline");

let syntaxError = new Diagnostique("syntaxError", "f12+doc");

let maladieListe = [mal_indenté, unsave, not_found, azmatique, syntaxError];
// Definition des traitements 

let ctrl = new Traitement("ctrl+maj+f", 60);

let save = new Traitement("saveOnFocusChange", 100);

let check = new Traitement ("checkLinkRelation", 35);

let ventoline = new Traitement ("ventoline", 40);

let f12doc = new Traitement ("f12+doc", 20);

let traitementListe = [ctrl,save,check,ventoline,f12doc];

    setInterval(cris,2000);
 
    // Marcus
    let i =0;
    let j = 0;
    let k = 0;
    while(i < listePatient.length && j < maladieListe.length && k < traitementListe.length){
        console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    Debugger.patientIn(listePatient[i], salle_attente);
    Debugger.diagnostique(listePatient[i],maladieListe[j]);
    Debugger.patientOut(listePatient[i]);
    listePatient[i].gotTo(pharmacie);
   listePatient[i].traitement(traitementListe[k]);
    console.log("-----------");
    i++;
    j++;
    k++;
    }
    
    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    // Debugger.patientIn(marcus, salle_attente);
    // Debugger.diagnostique(marcus,mal_indenté);
    // Debugger.patientOut(marcus);
    // marcus.gotTo(pharmacie);
    // marcus.traitement(ctrl);
    // console.log("-----------");

    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    // Debugger.patientIn(optimus , salle_attente);
    // Debugger.diagnostique(optimus ,unsave);
    // Debugger.patientOut(optimus);
    // optimus.gotTo(pharmacie);
    // optimus.traitement(save);
    // console.log("-----------");

    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    // Debugger.patientIn(sangoku , salle_attente);
    // Debugger.diagnostique(sangoku,not_found);
    // Debugger.patientOut(sangoku);
    // sangoku.gotTo(pharmacie);
    // sangoku.traitement(check);
    // console.log("-----------");



    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    // Debugger.patientIn(darthVader , salle_attente);
    // Debugger.diagnostique(darthVader,azmatique);
    // Debugger.patientOut(darthVader);
    // darthVader.gotTo(pharmacie);
    // darthVader.traitement(ventoline);
    // console.log("-----------");
    


    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    // Debugger.patientIn(semicolon , salle_attente);
    // Debugger.diagnostique(semicolon,syntaxError);
    // Debugger.patientOut(semicolon);
    // semicolon.gotTo(pharmacie);
    // semicolon.traitement(f12doc);
    // console.log("-----------");

    // console.log(`Dans la ${salle_attente.nom} il y a ${salle_attente.personnes.length} personnes`);
    
