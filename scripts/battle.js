
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