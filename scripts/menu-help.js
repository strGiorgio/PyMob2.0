const menuHelp = document.querySelector('.menu-help');
const closeButton = document.querySelector('.close-menu');
const openButton = document.querySelector('.main-button.menu.open');

openButton.addEventListener('click', open)
closeButton.addEventListener('click', close);

document.addEventListener('keydown', closeByEsc);

function open() {
    menuHelp.classList.toggle('on');
}

function close() {
    menuHelp.classList.toggle('on');
}

function closeByEsc(event) {
    const isEsc = event.key == 'Escape';

    if (isEsc) {
        menuHelp.classList.remove('on');
    }
}
