const burguerMenu= document.getElementById('burguer-menu')
const burguerMenuModal= document.getElementById('burguer-menu-modal')
const mainNav= document.getElementById('main-nav')
const boxBarShadowFirst= document.getElementById('box__bar-shadow--first')
const boxBarShadowSecond= document.getElementById('box__bar-shadow--second')

burguerMenu.addEventListener('click', ()=> {
    burguerMenuModal.classList.toggle('burguer-menu-modal--show')
    mainNav.classList.toggle('main-nav--show')

    setTimeout(() => {
        boxBarShadowFirst.classList.toggle('burguer-menu-modal__bar-shadow--first--show')
    }, 137.5);

    setTimeout(() => {
        boxBarShadowSecond.classList.toggle('burguer-menu-modal__bar-shadow--second--show')
    }, 330);
})






