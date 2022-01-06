
/* ---------- SCROLL BEHAVIOUR ---------- */
const boxes = document.querySelectorAll('.scroll-box');
const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {

    /* SLIDE SECTIONS IN FROM THE SIDES */
    const triggerBottom = window.innerHeight / 5 * 4;
    // const triggerTop = window.innerHeight / 5;
    boxes.forEach(box => {
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
//window.onload = 
window.addEventListener("load", () => {
    //init();
    // console.log(window.innerHeight / 5);
    // console.log(window.innerHeight / 5 * 4);

    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })

});