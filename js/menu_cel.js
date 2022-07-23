//Configuracion para el menu version movil

const btn_2 = document.getElementById('btn-2');
const header_2 =document.querySelector('header');
const layer =document.getElementById('layer');

btn_2.addEventListener('click',() => {
    header_2.classList.toggle('active');
    layer.classList.toggle('dark');
})

//cerrar todo al hacer click

const menuLinks_2 = document.querySelectorAll(".nav-menu a[href^=\"#\"]");

menuLinks_2.forEach(menuLink =>{ 
    menuLink.addEventListener("click",function() {
        header_2.classList.remove('active');
        layer.classList.remove('dark');   
    })
});