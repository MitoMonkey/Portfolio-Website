let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.navigation-list');

hamburger.addEventListener('click', function (e) {
    /* e.preventDefault(); */

    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    /* nav.style.display = 'block';
    nav.classList.toggle('responsive'); */
});

/* close the (responsive) nav menu when a link is clicked */
const navLinks = document.querySelectorAll(".navigation-list__item");
navLinks.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}));