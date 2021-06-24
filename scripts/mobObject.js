const hpValue = document.querySelector('#hp');
const defValue = document.querySelector('#defense');
const staValue = document.querySelector('#stamina');
const stgValue = document.querySelector('#strength');
const lvlValue = document.querySelector('#level');

class mob {
    constructor (name) {
        this.name = name;
        console.log(`Mob Gerado com o nome de ${this.name}`);

        this.mobHp = 20;
        this.mobDef = 2;
        this.mobSta = 2;
        this.mobStg = 4;
        this.mobLvl = 1;
    }

    showAttributes() {
        console.log(
            'Hp: ', this.mobHp, '\n',
            'Defense: ', this.mobDef, '\n',
            'Stamina: ', this.mobSta, '\n', 
            'Strength: ', this.mobStg, '\n', 
            'Level: ', this.mobLvl);

        hpValue.innerHTML = `${this.mobHp}`;
        defValue.innerHTML = `${this.mobDef}`;
        staValue.innerHTML = `${this.mobSta}`;
        stgValue.innerHTML = `${this.mobStg}`;
        lvlValue.innerHTML = `${this.mobLvl}`;
    }
}
const myMob = new mob('Robert');
myMob.showAttributes()