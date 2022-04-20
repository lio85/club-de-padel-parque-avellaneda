let downArrows=  document.querySelectorAll('.down-arrow')

for (let i=0; i< downArrows.length; i++){
    downArrows[i].addEventListener('click', (e)=> {       
        downArrows[i].parentElement.parentElement.lastElementChild.classList.toggle("hidden-content--show")         
        downArrows[i].classList.toggle("down-arrow--rotate")
    })
}