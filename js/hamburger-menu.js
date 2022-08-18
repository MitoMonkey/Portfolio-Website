const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation-list');

/* show/hide nav list when user clicks on the hamburger */
hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".navigation-list__item");
navLinks.forEach(n => {
    n.addEventListener("click", () => {

        /* close the (responsive) nav menu when a link is clicked */
        hamburger.classList.remove("active");
        nav.classList.remove("active");

        /* reset (=add) underline of all nav items */
        navLinks.forEach(item => {
            if (item.classList.contains('navigation-list__item--active')) item.classList.remove('navigation-list__item--active');
        })
        /* remove underline of the nav-list-item that is clicked (important for nav links that are just page jumps) */
        n.classList.add('navigation-list__item--active');
    })
});


