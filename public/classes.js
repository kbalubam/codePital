export class Lieu {
    constructor(nom, personnes) {
        this.nom = nom,
            this.personnes = personnes
    }
}

export class Patients {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom,
            this.maladie = maladie,
            this.argent = argent,
            this.argent = argent,
            this.poche = poche,
            this.etatSante = etatSante
        this.traitement = (medicament) => {
            console.log(`le traitement de Marcus coûte ${medicament.prix}`);
            if (this.argent >= medicament.prix) {
                this.poche.push(medicament.nom);
                this.paye(medicament);
                this.takeCare();

            } else {
                console.log(`${this.nom} n'as pas assez d'argent`);
                console.log(`${this.nom} est mort et est au cimetière`)
                

            }

        }
        this.gotTo = (lieu) => {



            lieu.personnes.push(this.nom);
            console.log(`${this.nom} est allé à la ${lieu.nom}`)

        }



        this.takeCare = () => {
            this.etatSante = "soigné"
            console.log(`${this.nom} est ${this.etatSante}`);
        }

        this.paye = (medicament) => {
            this.argent -= medicament.prix;
        }
    }
}

export class Doctor {
    constructor(nom, argent, cabinet) {
        this.nom = nom,
            this.argent = argent,
            this.cabinet = cabinet,



            this.patientIn = (patient, salle) => {
                salle.personnes.splice(salle.personnes.indexOf(patient.nom), 1);
                this.cabinet.push(patient.nom);
                console.log(`${patient.nom} est entré dans le cabinet`)
            }

        this.diagnostique = (patient, maladieD) => {
            console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
            if (patient.argent >= 50) {
                this.argent += 50;
                patient.argent-=50;
                console.log(`la consulation est payée, le medecin va lui prescrire un traitement`);
                console.log(`Le traitement de ${patient.nom} est ${maladieD.traitement}`)

            } else {
                console.log(`Le medecin appelle la police et embarque ${patient.nom}`);

            }
        }


        this.patientOut = (patient) => {
            this.cabinet.splice(this.cabinet.indexOf(patient.nom), 1);
            console.log(`${patient.nom} est sorti du cabinet`)
        }

    }
}

export class Diagnostique {
    constructor(maladie, traitement) {
        this.maladie = maladie,
            this.traitement = traitement
    }
}

export class Traitement {
    constructor(nom, prix) {
        this.nom = nom,
            this.prix = prix
    }
}
