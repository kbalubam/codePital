export class Lieu {
    constructor(nom, personnes) {
        this.nom=nom,
        this.personnes=personnes
    }
}

export class Patients{
    constructor(nom,maladie,argent,poche,etatSante) {
        this.nom=nom,
        this.maladie=maladie,
        this.argent=argent,
        this.argent=argent,
        this.poche=poche,
        this.etatSante=etatSante
        this.traitement = ()=>{

        }
        this.gotTo = ()=>{

        }
        this.paye = () =>{

        }
    }
}

export class Doctor {
    constructor(nom, argent , cabinet, diagnostique, patientIn, patientOut) {
      this.nom=nom,
      this.argent=argent,
      this.cabinet=cabinet,
      
      this.patientIn = () =>{

      }
      this.patientOut = () =>{

      }
      
    }
}

 export class Diagnostique{
    constructor(maladie,traitement){
        this.maladie=maladie,
        this.traitement=traitement
    }
}

export class Traitement{
    constructor(nom,prix) {
        this.nom=nom,
        this.prix=prix
    }
}
