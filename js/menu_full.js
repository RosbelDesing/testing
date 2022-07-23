//mover toda la web y mostrar el menu en la vista PC:va al final de toda la pagina xq la mueve
const btn = document.getElementById('btn');
const web = document.querySelector('.main-page');
const header =document.querySelector('header')

btn.addEventListener('click',() => {
    web.classList.toggle('left-active');
    header.classList.toggle('on');
})

//cerrar todo al hacer click

const menuLinks = document.querySelectorAll(".nav-menu a[href^=\"#\"]");

menuLinks.forEach(menuLink =>{ 
    menuLink.addEventListener("click",function() {
        web.classList.remove('left-active');
        header.classList.remove('on');   
    })
});