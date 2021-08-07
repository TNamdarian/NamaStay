// ..................... Create the selectores
let menuToggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');

//  ..................... Creat event listener 
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
})