const atck = document.querySelector('#atk');
const reg = document.querySelector('#reg');
const atkE = document.querySelector('#atkE');
const fgr = document.querySelector('fgr');

const lifeBarEnemy = document.querySelector('.main-lifeBar._enemy');
const lifeBarMob = document.querySelector('.main-lifeBar._mob');

const lifeValueMob = document.querySelector('.text-status');

const damageDisplayEnemy = document.querySelector('#statusDamageEnemy');
const damageDisplayMob = document.querySelector('#statusDamageMob');

console.log(lifeValueMob.innerHTML);

function action(action){
    switch(action) {
        case 'atk':
            /*Remove class of the damage displays*/
            console.log('Atacou!');
            damageDisplayMob.classList.remove('_mobReg');
            damageDisplayEnemy.classList.remove('_enemyReg');
            /*Atk enemy modification and outputs*/
            lifeBarEnemy.value -= 5;
            damageDisplayEnemy.classList.add('_enemyDmg');
            damageDisplayEnemy.innerHTML = "-5";
            setTimeout(() => {damageDisplayEnemy.innerHTML = ""}, 400)
            /*Atk mob modification and outputs*/
            lifeBarMob.value -= 5;
            lifeValueMob.innerHTML = `${lifeBarMob.value}/20`;
            damageDisplayMob.classList.add('_mobDmg');
            damageDisplayMob.innerHTML = "-5";
            setTimeout(() => {damageDisplayMob.innerHTML = ""}, 500);
            break
        case 'reg':
            /*Remove class of the damage displays*/
            console.log('Regenerou!');
            damageDisplayMob.classList.remove('_mobDmg');
            /*Regeneration mob modifications and outputs*/
            lifeBarMob.value += 5;
            lifeValueMob.innerHTML = `${lifeBarMob.value}/20`; 
            damageDisplayMob.classList.add('_mobReg');
            damageDisplayMob.innerHTML = "+10";
            setTimeout(() => {damageDisplayMob.innerHTML = ""}, 500)
            break
        case 'atkE':
            /*Remove class of the damage diplays*/
            console.log('Atacou com ataque especial!');
            damageDisplayMob.classList.remove('_mobReg');
            /*Atk special enemy modification and outputs*/
            lifeBarEnemy.value -= 10;
            damageDisplayEnemy.classList.add('_enemyDmg');
            damageDisplayEnemy.innerHTML = "-10";
            setTimeout(() => {damageDisplayEnemy.innerHTML = ""}, 400)
            /*Atk special mob modification and outputs*/
            lifeBarMob.value -= 5;
            lifeValueMob.innerHTML = `${lifeBarMob.value}/20`;
            damageDisplayMob.classList.add('_mobDmg');
            damageDisplayMob.innerHTML = "-5";
            setTimeout(() => {damageDisplayMob.innerHTML = ""}, 500)
            break
        case 'fgr':
            console.log('Fugiu!');
            break
        default:
            break
    }
}