//Defino como constante la lista de iconos
const list = document.querySelectorAll('.list');

animarNavigation();

function animarNavigation() {
    //Esuchco el evento click sobre los iconos y llamo a la funcion creada previamente
    list.forEach((item) => item.addEventListener('click', activeLink));
}

//Creo la funcion para activar 1 icono y desactivar los demas
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
