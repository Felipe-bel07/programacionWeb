function btnMenu(){
    var btn = document.getElementsByClassName('btn__menu');
    var menu = document.getElementsByClassName('nav');
    btn[0].classList.toggle('btn__menu--active')
    menu[0].classList.toggle('nav--active')
}

