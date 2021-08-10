// ..................... MenuBar 
// ..................... Create the selectores
let menuToggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');
let menuNetworksItemss = document.querySelectorAll('.menu-networks-items');

//  ..................... Creat eventlistener 
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');

    // Remove active class to restart delayed effect
    contact.classList.remove('active');
    navRight.classList.remove('active');

    if (menuToggle.classList.contains('active')) {
        setTimeout(() => {
            navRight.classList.add('active');
        }, 100)

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            setTimeout(() => {
                navLinks[i].classList.add('active')
            }, i * 100)
        }
        setTimeout(() => {
            contact.classList.add('active');
        }, 700);
    }
})