/*---- Nav menu -----*/

const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})

/*---- Button ancre -----*/

const btnUp = document.querySelector('.button-up');

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0
    })
})


const btnDown = document.querySelector('.button-down');

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0
    })
})


