'use strict';

/*REDUCED MOTION*/

const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

if (reduceMotion) {

    document.documentElement.classList.add('reduced-motion');

}

/* ==========================================================
   REVEAL ELEMENTS
========================================================== */

const revealElements = document.querySelectorAll(

    '.section-header,' +

    '.challenge-card,' +

    '.capability,' +

    '.experience-item,' +

    '.insight-card,' +

    '.about-image,' +

    '.about-content,' +

    '.contact-information,' +

    '.contact-form,' +

    '.footer'

);

/*INTERSECTION OBSERVER*/
const revealObserver = new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('visible');

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold:.15,

        rootMargin:"0px 0px -60px 0px"

    }

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});

/* HERO PARALLAX*/
const heroImage = document.querySelector('.hero-image');
function heroParallax(){
    if(reduceMotion) return;
    if(!heroImage) return;
    const offset = window.scrollY * .12;
    heroImage.style.transform =
        `translateY(${offset}px)`;
}

window.addEventListener(
    'scroll',
    heroParallax,
    {passive:true}
);

/* ==========================================================
   COUNTERS
========================================================== */

const counters = document.querySelectorAll('.highlight .number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const text = counter.textContent.trim();
        // No animar textos como "AI"
        if (isNaN(parseInt(text))) {
            counterObserver.unobserve(counter);
            return;
        }
        const hasPlus = text.includes('+');
        const target = parseInt(text);
        let current = 0;
        const duration = 1200;
        const start = performance.now();
        function animate(timestamp) {
            const progress = Math.min((timestamp - start) / duration, 1);
            current = Math.floor(progress * target);
            counter.textContent = current + (hasPlus ? '+' : '');
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target + (hasPlus ? '+' : '');
            }
        }
        requestAnimationFrame(animate);
        counterObserver.unobserve(counter);
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*INIT*/

heroParallax();