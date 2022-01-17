
/* ---------- SCROLL BEHAVIOUR ---------- */
/* const boxes = document.querySelectorAll('.scroll-box'); */
const slider = document.querySelectorAll('.slide-in');
const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {

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

const slider_init = document.querySelectorAll('.slide-in.init');

window.addEventListener("load", () => {
    //init();

    /* slide in additional elements on large screens */
    const triggerBottom = window.innerHeight / 5 * 4;
    slider.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })

    /* slide in things that should be loaded on any screen at page load */
    slider_init.forEach(box => {
        box.classList.add('show');
    })
});