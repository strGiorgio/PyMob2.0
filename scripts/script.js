const nameCard = document.querySelector('#name');
const pointsValue = document.querySelector('#points');
const hpValue = document.querySelector('#hp');
const defValue = document.querySelector('#defense');
const staValue = document.querySelector('#stamina');
const stgValue = document.querySelector('#strength');
const lvlValue = document.querySelector('#level');

const nameValue = document.querySelector('.main-input.inputName');
const readyButton = document.querySelector('.main-button.readyB');

const addButton = document.querySelector('.main-addButton');
var points = 10;

const start = document.querySelector('#start');

const atck = document.querySelector('#atk');
const reg = document.querySelector('#reg');
const atkE = document.querySelector('#atkE');
const fgr = document.querySelector('fgr');

function action(action){
    switch(action) {
        case 'atk':
            console.log('Atacou!');
            break
        case 'reg':
            console.log('Regenerou!');
            break
        case 'atkE':
            console.log('Atacou com ataque especial!');
            break
        case 'fgr':
            console.log('Fugiu!');
            break
        default:
            break
    }
}

class mob {
    constructor(name = "Romarinho") {
        this.mobName = name;
        this.mobHp = 20;
        this.mobDefense = 2;
        this.mobStamina = 2;
        this.mobStrength = 4;
        this.mobLevel = 1;
    }

    showProperties(modo) {
        if (modo == "screen") {
            //Aparece isso na tela
            nameCard.innerHTML = this.mobName;
            pointsValue.innerHTML = points;
            hpValue.innerHTML = this.mobHp;
            defValue.innerHTML = this.mobDefense;
            staValue.innerHTML = this.mobStamina;
            stgValue.innerHTML = this.mobStrength;
            lvlValue.innerHTML = this.mobLevel; 
        } else if (modo == "console"){
            //Aparece isso no console
            console.log(this.mobName);
            console.log(this.mobHp);
            console.log(this.mobDefense);
            console.log(this.mobStamina);
            console.log(this.mobStrength);
            console.log(this.mobLevel);
        }
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

    callBattle() {
        battle(this.mobHp, this.mobDefense, this.mobStamina, this.mobStrength, points, this.mobLevel);
    }
}

function battle(hp, def, sta, stg, points, lvl) {
    console.log(`Mob Hp: ${hp}`);
    console.log(`Mob Defense: ${def}`);
    console.log(`Mob Stamina: ${sta}`);
    console.log(`Mob Strenght: ${stg}`);
    console.log(`Mob Points: ${points}`);
    console.log(`Mob Level: ${lvl}`);
}

mob = new mob();
mob.showProperties('screen');
mob.showProperties('console');

function nameDef() {
    let mobName = nameValue.value
    console.log(mobName.length);
    if (mobName.length <= 2){
        window.alert('O Nome precisa ter mais de duas letras ou números!');
    }else {
        let r = window.confirm(`Tem certeza que deseja utilizar "${mobName}" como nome do seu mob?`);
        if (r == true) {
            mob.mobName = mobName;
            mob.showProperties('screen');
            location.href = "../screen-showAttributes.html";
        }
    }
}

function pointsTrade(attr) {
    if (points <= 0) {
        console.log('Você não possui pontos suficientes!');
    } else {
        if (attr == "hp") {
            console.log(attr);
            points = points - 1;
            mob.increment('hp');
            mob.showProperties('screen');
        }
        else if (attr == "def") {
            console.log(attr);
            points = points - 1;

            mob.increment('defense');
            mob.showProperties('screen');
        }
        else if (attr == "sta") {
            console.log(attr);
            points = points - 1;
            mob.increment('stamina');
            mob.showProperties('screen');
        }
        else if (attr == "stg") {
            console.log(attr);
            points = points - 1;
            mob.increment('strength');
            mob.showProperties('screen');
        }
    }
    
}

mob.callBattle();
