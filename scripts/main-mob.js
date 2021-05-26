const hpValue = document.querySelector('#hp');
const defValue = document.querySelector('#defense');
const staValue = document.querySelector('#stamina');
const stgValue = document.querySelector('#strength');
const lvlValue = document.querySelector('#level');

const nameValue = document.querySelector('.main-input.inputName');
const readyButton = document.querySelector('.main-button.readyB');


class mob {
    constructor(name) {
        this.mobName = name;
        this.mobHp = 20;
        this.mobDefense = 2;
        this.mobStamina = 2;
        this.mobStrength = 4;
        this.mobLevel = 1;
    }

    showProperties() {
        //Aparece isso na tela
        hpValue.innerHTML = this.mobHp;
        defValue.innerHTML = this.mobDefense;
        staValue.innerHTML = this.mobStamina;
        stgValue.innerHTML = this.mobStrength;
        lvlValue.innerHTML = this.mobLevel; 
        //Aparece isso no console
        console.log(this.mobName);
        console.log(this.mobHp);
        console.log(this.mobDefense);
        console.log(this.mobStamina);
        console.log(this.mobStrength);
        console.log(this.mobLevel);
    }

    increment(attr) {
        switch (attr) {
            case "hp":
                this.mobHp ++;
                hpValue.innerHTML = this.mobHp;
                break

            case "defense":
                this.mobDefense ++;
                defValue.innerHTML = this.mobDefense
                break
            
            case "stamina":
                this.mobStamina ++;
                staValue.innerHTML = this.mobStamina
                break

            case "strength":
                this.mobStrength ++;
                stgValue.innerHTML = this.mobStrength
                break
            
            default:
                break
        }   
        
    }
}
mob = new mob();
mob.showProperties()

function nameDef() {
    let mobName = nameValue.value
    console.log(mobName.length);
    if (mobName.length <= 2){
        alert('O Nome precisa ter mais de duas letras ou números!');
    }else {
        mob.mobName = mobName;
        mob.showProperties()
    }
}

mob.increment("hp")
mob.increment("hp")
mob.increment("strength")
mob.increment("stamina")
mob.increment("defense")
mob.increment("defense")
mob.increment("defense")
