const burger = document.querySelectorAll('.header__burger');
const menu = document.querySelector('.header__menu')

function show () {
    menu.classList.toggle('active')
}

burger.forEach(item => item.addEventListener('click' , show ) )