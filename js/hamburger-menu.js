let hamburger = document.getElementById('hamburger');
let nav = document.getElementById("main-nav");

hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('responsive');
});