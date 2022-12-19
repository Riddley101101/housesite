let menuBurger = document.querySelector('.header__burger');
let menuShow = document.querySelector('.menu');
const header = document.querySelector('.header');
const body = document.querySelector('body')


menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    menuShow.classList.toggle ('active');
    body.classList.toggle('lock');
    if (header.classList.contains('fixed')) {
        header.classList.remove('fixed')
    } 
})

