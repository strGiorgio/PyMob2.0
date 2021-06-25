const name = document.querySelector('#name');

function defName() {
    if (name.value.length > 2 && name.value.length < 12) {
        let r = confirm(`Deseja deixar ${name.value} como nome de seu mob?`)
        if (r === true) {
            location.href = "../screen-showAttributes.html";
        }             
    } else {
        alert('O nome deve possuir mais de 2 carácteres e menos  de 12!');
    }
}