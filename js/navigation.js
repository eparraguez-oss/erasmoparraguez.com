/* navigation.js
   Version 1.1 */

'use strict';

/*ELEMENTS*/

const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navigation = document.querySelector('.nav');
const navigationLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section[id]');

/*MOBILE MENU*/
function toggleMenu() {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}
menuToggle.addEventListener('click', toggleMenu);

/*SMOOTH NAVIGATION*/
navigationLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;
        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
        const headerHeight = header.offsetHeight;
        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

navigation.classList.remove('active');
menuToggle.classList.remove('active');
document.body.classList.remove('menu-open');

/*HEADER ON SCROLL*/
function updateHeader() {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', updateHeader);

/*ACTIVE SECTION*/
function updateActiveSection() {
    let currentSection = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top &&
            window.scrollY < top + height) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveSection);

/*INITIALIZE*/
updateHeader();
updateActiveSection();

menuToggle.classList.toggle("active");

/*HIDE HEADER ON SCROLL */

let lastScroll = 0;
function handleHeaderVisibility() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 100) {
        header.classList.remove('header-hidden');
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll > lastScroll) {
        header.classList.add('header-hidden');
    } else {

        header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleHeaderVisibility);