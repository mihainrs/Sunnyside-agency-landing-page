// Get elements for the burger
let nav = document.querySelector('.topright');
let menu = document.querySelector('.hamburger');

// click toggle on the hamburger 
menu.addEventListener('click', () => {
    nav.classList.toggle('dead');
});