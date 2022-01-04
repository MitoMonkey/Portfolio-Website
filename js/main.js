
/* ---------- SCROLL ANIMATION ---------- */
const boxes = document.querySelectorAll('.scroll-box');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    // const triggerTop = window.innerHeight / 5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        // const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

        /* if (boxBottom < triggerTop) {
            box.classList.remove('show');
        } else {
            box.classList.add('show');
        } */
    })
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