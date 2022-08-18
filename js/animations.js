
/* ---------- SCROLL BEHAVIOUR ---------- */
/* const boxes = document.querySelectorAll('.scroll-box'); */
const slider = document.querySelectorAll('.slide-in');
const header = document.querySelector('.page-header');
const scroll_cta = document.getElementById("scroll_calltoaaction");

window.addEventListener('scroll', () => {

    /* hide the "scoll to read more" call-to-action as soon as the user starts to scroll */
    if (scroll_cta) {
        if (!scroll_cta.classList.contains('hide')) {
            scroll_cta.classList.remove('show');
            scroll_cta.classList.add('hide');
        }
    }


    /* SLIDE SECTIONS aka "slide-in" IN FROM THE SIDE */
    const triggerBottom = window.innerHeight / 5 * 4;
    // const triggerTop = window.innerHeight / 5;

    /* boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        // const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < triggerBottom) {
            /* setTimeout(() => { box.classList.add('show') }, 50); * /
            box.classList.add('show');
        } else {
            /* setTimeout(() => { box.classList.remove('show') }, 50); * /
            box.classList.remove('show');
        }
        /* if (boxBottom < triggerTop) {
            box.classList.remove('show');
        } else {
            box.classList.add('show');
        } * /
    }) */

    slider.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        // const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < triggerBottom) {
            /* setTimeout(() => { box.classList.add('show') }, 50); */
            box.classList.add('show');
        } else {
            /* setTimeout(() => { box.classList.remove('show') }, 50); */
            box.classList.remove('show');
        }
        /* if (boxBottom < triggerTop) {
            box.classList.remove('show');
        } else {
            box.classList.add('show');
        } */
    })

    /* HEADER ANIMATION */
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/* ---------- ANIMATIONS AT PAGE INITIAL OPEN ---------- */

/* elements that should always slide in on page load without scrolling */
const slider_init = document.querySelectorAll('.slide-in.init');

window.addEventListener("load", () => {
    //init();

    /* slide in additional elements on large screens */
    /* const triggerBottom = window.innerHeight / 5 * 4;
    slider.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }) */

    /* slide in things that should be loaded on any screen at page load */
    slider_init.forEach(box => {
        box.classList.add('show');
    })

    if (scroll_cta) { scroll_cta.classList.add('show'); }
});